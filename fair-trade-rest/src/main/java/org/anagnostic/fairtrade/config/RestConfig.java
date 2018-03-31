package org.anagnostic.fairtrade.config;

import org.anagnostic.fairtrade.model.BaseEntity;
import org.anagnostic.fairtrade.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.type.filter.AssignableTypeFilter;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.core.event.ValidatingRepositoryEventListener;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.validation.Validator;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter {

    private static final Logger LOGGER = LoggerFactory.getLogger(RestConfig.class);

    @Autowired
    private Validator validator;

    @Bean
    public SpelAwareProxyProjectionFactory projectionFactory() {
        return new SpelAwareProxyProjectionFactory();
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        LOGGER.info("explicit repository config");

        // expose ID property for all entities, by performing reflection inside the domain package
        ClassPathScanningCandidateComponentProvider provider = new ClassPathScanningCandidateComponentProvider(true);
        provider.addIncludeFilter(new AssignableTypeFilter(BaseEntity.class));
        Set<BeanDefinition> components = provider.findCandidateComponents(User.class.getPackage().getName());
        List<Class<?>> classes = new ArrayList<>();

        components.forEach(component -> {
            try {
                classes.add(Class.forName(component.getBeanClassName()));
            } catch (Exception e) {
                LOGGER.error(e.toString());
            }
        });

        config.exposeIdsFor(classes.toArray(new Class[classes.size()]));
    }

    /**
     * Enable JSR-303 validation on SDR Repositories
     * @param validatingListener
     */
    @Override
    public void configureValidatingRepositoryEventListener(ValidatingRepositoryEventListener validatingListener) {
        validatingListener.addValidator("beforeCreate", validator);
        validatingListener.addValidator("beforeSave", validator);
    }
}
