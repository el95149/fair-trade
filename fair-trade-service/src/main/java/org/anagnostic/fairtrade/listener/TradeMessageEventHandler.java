package org.anagnostic.fairtrade.listener;

import org.anagnostic.fairtrade.exception.MaliciousTradeMessageAttemptException;
import org.anagnostic.fairtrade.model.TradeMessage;
import org.anagnostic.fairtrade.repository.UserRepository;
import org.anagnostic.fairtrade.security.CustomUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;


@Component
@RepositoryEventHandler(TradeMessage.class)
public class TradeMessageEventHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(TradeMessageEventHandler.class);

    @Autowired
    private UserRepository userRepository;

    @HandleBeforeCreate
    public void handleBeforeCreate(TradeMessage tradeMessage) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails loggedInUser = (CustomUserDetails) auth.getPrincipal();
        final String loggedInUserRole = loggedInUser.getAuthorities().stream().map(GrantedAuthority::getAuthority).findFirst().orElse(null);
        if (loggedInUserRole == null) {
            // should never be the case...
            throw new MaliciousTradeMessageAttemptException("No role assigned for user: " + loggedInUser.getId());
        }
        if (loggedInUserRole.equals("ROLE_USER") &&
                (tradeMessage.getUser() == null || !tradeMessage.getUser().getId().equals(loggedInUser.getId()))) {
            //simple users can only create trade messages for themselves, override any other value set (i.e. malicious attempt)
            // Alternatively, an error could be throws, but for simplicity's sake an override is performed instead
            if (tradeMessage.getUser() != null) {
                LOGGER.warn("Malicious attempt to create TradeMessage, creator/target: {}/{}", loggedInUser.getId(), tradeMessage.getUser() == null ? null : tradeMessage.getUser().getId());
            }
            tradeMessage.setUser(userRepository.findOne(loggedInUser.getId()));
        }
    }
}
