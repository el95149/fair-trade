package org.anagnostic.fairtrade.security;

import org.anagnostic.fairtrade.model.User;
import org.anagnostic.fairtrade.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginAttemptService loginAttemptService;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        String ip = loginAttemptService.getClientIP();
        if (loginAttemptService.isBlocked(ip)) {
            LOGGER.error("User blocked, email/IP: {}/{}", email, ip);
            throw new RuntimeException("blocked");
        }

        User user = userRepository.findByEmailAndIsActive(email, true);

        if (user == null) {
            LOGGER.error("User not found or inactive, username: {}", email);
            throw new UsernameNotFoundException("");
        }
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));

        return new CustomUserDetails(user.getId(), user.getEmail(), user.getPassword(), user.getIsActive(),
                grantedAuthorities);
    }
}
