package org.anagnostic.fairtrade.model.projection;

import org.anagnostic.fairtrade.model.User;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "simpleUser", types = { User.class })
public interface SimpleUserProjection {

	Long getId();

	String getFirstName();

	String getLastName();

	User.Gender getGender();

	String getEmail();

	String getComments();

	Boolean getIsActive();

	Boolean getIsExpired();

}
