package org.anagnostic.fairtrade.repository;

import org.anagnostic.fairtrade.model.User;
import org.anagnostic.fairtrade.model.projection.SimpleUserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, Long> {

    @RestResource(exported = false)
        //do not export as rest end-point, to avoid disclosing sensitive information, such as password.
    User findByEmail(String email);

    @RestResource(exported = false)
        //do not export as rest end-point, to avoid disclosing sensitive information, such as password.
    User findByEmailAndIsActive(String email, boolean isActive);

}
