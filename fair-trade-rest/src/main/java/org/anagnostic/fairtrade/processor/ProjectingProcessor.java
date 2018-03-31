package org.anagnostic.fairtrade.processor;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.anagnostic.fairtrade.model.User;
import org.anagnostic.fairtrade.model.projection.SimpleUserProjection;
import org.apache.commons.lang3.StringUtils;
import org.springframework.aop.support.AopUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.Optional;

/**
 * Projecting resource used for {@link ProjectingProcessor}. Does not include empty links in JSON, otherwise two 
 * _links keys are present in returning JSON.
 *
 * @param <T>
 */
@JsonInclude(JsonInclude.Include.NON_EMPTY)
class ProjectingResource<T> extends Resource<T> {

    ProjectingResource(final T content) {
        super(content);
    }
}

/**
 * Resource processor for all resources which applies projection for single resource. By default, projections
 * are not
 * applied when working with single resource, e.g. http://127.0.0.1:8080/users/580793f642d54436e921f6ca. See
 * related issue <a href="https://jira.spring.io/browse/DATAREST-428">DATAREST-428</a>
 */
@Component
public class ProjectingProcessor implements ResourceProcessor<Resource<Object>> {

    private static final String PROJECTION_PARAMETER = "projection";

    private final ProjectionFactory projectionFactory;

    private final RepositoryRestConfiguration repositoryRestConfiguration;

    private final HttpServletRequest request;

    public ProjectingProcessor(@Autowired final RepositoryRestConfiguration repositoryRestConfiguration,
                               @Autowired final ProjectionFactory projectionFactory,
                               @Autowired final HttpServletRequest request) {
        this.repositoryRestConfiguration = repositoryRestConfiguration;
        this.projectionFactory = projectionFactory;
        this.request = request;
    }

    @Override
    public Resource<Object> process(final Resource<Object> resource) {
        if (AopUtils.isAopProxy(resource.getContent())) {
            return resource;
        }

        final Optional<Class<?>> projectionType = findProjectionType(resource.getContent());
        if (projectionType.isPresent()) {
            final Object projection = projectionFactory.createProjection(projectionType.get(), resource
                    .getContent());
            return new ProjectingResource<>(projection);
        }

        return resource;
    }

    private Optional<Class<?>> findProjectionType(final Object content) {
        final String projectionParameter = request.getParameter(PROJECTION_PARAMETER);
        final Map<String, Class<?>> projectionsForType = repositoryRestConfiguration.getProjectionConfiguration()
                .getProjectionsFor(content.getClass());

        if (!projectionsForType.isEmpty()) {
            if (!StringUtils.isEmpty(projectionParameter)) {
                // projection parameter specified
                final Class<?> projectionClass = projectionsForType.get(projectionParameter);
                if (projectionClass != null) {
                    return Optional.of(projectionClass);
                }
            }else {
                // no projection parameter specified
                // set a default projection for User entities, to hide sensitive data, such as password etc.
                if (content.getClass().equals(User.class)) {
                    return Optional.of(SimpleUserProjection.class);
                }
            }
            return Optional.empty();
        }

        return Optional.empty();
    }
}