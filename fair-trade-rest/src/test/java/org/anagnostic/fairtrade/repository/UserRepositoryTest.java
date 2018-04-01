package org.anagnostic.fairtrade.repository;

import org.anagnostic.fairtrade.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.verification.Times;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.rest.core.event.BeforeCreateEvent;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.AFTER_TEST_METHOD;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.BEFORE_TEST_METHOD;
import static org.springframework.test.context.jdbc.SqlConfig.TransactionMode.ISOLATED;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void tesFindDefaultUser() {
        final User byEmailAndIsActive = userRepository.findByEmailAndIsActive("johnwick@syndicate.com", true);
        assertThat(byEmailAndIsActive).isNotNull();
    }

    @Test
    @Sql(
            scripts = "classpath:setup_user_tests.sql",
            executionPhase = BEFORE_TEST_METHOD,
            config = @SqlConfig(transactionMode = ISOLATED)
    )
    public void testCreateAndDelete() throws Exception{
        User user = new User();
        user.setRole(User.Role.USER);
        user.setFirstName("Angelos");
        user.setLastName("Anagnostopoulos");
        user.setEmail("angelos@anagnostic.org");
        user.setPassword("123456");
        user.setIsActive(Boolean.TRUE);
        user.setExpired(Boolean.FALSE);
        user.setCreateUser(0L);
        user.setUpdateUser(0L);
        ZonedDateTime utc = ZonedDateTime.now(ZoneOffset.UTC);
        user.setCreateDate(Timestamp.from(utc.toInstant()));
        user.setUpdateDate(user.getCreateDate());
        user = userRepository.save(user);

        assertThat(user.getId() != null);

        userRepository.delete(user.getId());

    }
}
