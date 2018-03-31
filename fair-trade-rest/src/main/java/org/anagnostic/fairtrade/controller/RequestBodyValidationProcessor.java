package org.anagnostic.fairtrade.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.data.rest.core.RepositoryConstraintViolationException;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.RequestBodyAdviceAdapter;

import javax.validation.Valid;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;

/**
 * Workaround class for making JSR-303 annotation validation work for controller
 * method parameters. Check the issue
 * <a href="https://jira.spring.io/browse/DATAREST-593">DATAREST-593</a>
 */
//@ControllerAdvice
public class RequestBodyValidationProcessor extends RequestBodyAdviceAdapter {

	private final Logger logger = LoggerFactory.getLogger(RequestBodyValidationProcessor.class);

	private final Validator validator;

	public RequestBodyValidationProcessor(@Autowired final Validator jsr303Validator) {
		this.validator = jsr303Validator;
		logger.info("Initialized validation processor");
	}

	@Override
	public boolean supports(final MethodParameter methodParameter, final Type targetType,
                            final Class<? extends HttpMessageConverter<?>> converterType) {
		final Annotation[] parameterAnnotations = methodParameter.getParameterAnnotations();
		for (final Annotation annotation : parameterAnnotations) {
			if (annotation.annotationType().equals(Valid.class)) {
				return true;
			}
		}

		return false;
	}

	@Override
	public Object afterBodyRead(final Object body, final HttpInputMessage inputMessage, final MethodParameter parameter,
                                final Type targetType, final Class<? extends HttpMessageConverter<?>> converterType) {
		final Object obj = super.afterBodyRead(body, inputMessage, parameter, targetType, converterType);
		final BindingResult bindingResult = new BeanPropertyBindingResult(obj, obj.getClass().getCanonicalName());
		validator.validate(obj, bindingResult);
		if (bindingResult.hasErrors()) {
			throw new RepositoryConstraintViolationException(bindingResult);
		}
		return obj;
	}

}