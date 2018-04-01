package org.anagnostic.fairtrade.config;

import org.anagnostic.fairtrade.model.User;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private Environment environment;

    /**
     * Register a CORS filter when in development, to allow for easier front-end development
     *
     * @return
     */
    @Bean
    @Profile("dev")
    public CorsFilter corsFilter() {

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // you USUALLY want this
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("HEAD");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("DELETE");
        config.addAllowedMethod("PATCH");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        // endpoints with disabled authentication
        web.ignoring().antMatchers("/", "/index.html",
                "/app/**",
                "resources/**",
                "/api/tradeMessages/search/countByCountry",
                "/api/tradeMessages/search/countByCurrencyMarket",
                "/api/tradeMessages/currencies");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // register CORS filter only during development
        if (ArrayUtils.contains(environment.getActiveProfiles(), "dev")) {
            http.addFilterBefore(corsFilter(), ChannelProcessingFilter.class);
        }
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER);

        // static resources
        http.authorizeRequests().antMatchers("/public/**", "/favicon.ico").permitAll();

        // TradeMessage end-points
        http.authorizeRequests().antMatchers(GET, "/api/tradeMessages/**").hasRole(User.Role.ADMIN.toString());
        //POST  is allowed for any authenticated user, special rules apply using SDR repository events
        http.authorizeRequests().antMatchers(PATCH, "/api/tradeMessages/**").hasAuthority(User.Role.ADMIN.toString());
        http.authorizeRequests().antMatchers(DELETE, "/api/tradeMessages/**").hasAuthority(User.Role.ADMIN.toString());

        // User end-points
        http.authorizeRequests().antMatchers(GET, "/api/users/**").hasRole(User.Role.ADMIN.toString());
        http.authorizeRequests().antMatchers(POST, "/api/users").hasRole(User.Role.ADMIN.toString());
        http.authorizeRequests().antMatchers(PATCH, "/api/users/**").hasAuthority(User.Role.ADMIN.toString());
        http.authorizeRequests().antMatchers(DELETE, "/api/users/**").hasAuthority(User.Role.ADMIN.toString());

        // most general rules go last
        http.authorizeRequests().anyRequest().authenticated().and().httpBasic()
                .and().csrf().disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        //TODO: enable password encryption
        auth.userDetailsService(userDetailsService);
    }
}
