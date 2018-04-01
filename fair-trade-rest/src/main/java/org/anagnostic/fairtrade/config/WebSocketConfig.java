package org.anagnostic.fairtrade.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

// import org.springframework.messaging.simp.config.MessageBrokerRegistry;

/**
 * Enable and configure Stomp over WebSocket.
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

  /**
   * Register Stomp endpoints: the url to open the WebSocket connection.
   */
  @Override
  public void registerStompEndpoints(StompEndpointRegistry registry) {
    
    // Register the "/api-websocket-endpoint" endpoint, enabling the SockJS protocol.
    // SockJS is used (both client and server side) to allow alternative 
    // messaging options if WebSocket is not available.
    registry.addEndpoint("/api/websocket-endpoint").setAllowedOrigins("*").withSockJS();
    
    return;
  }

  @Override
  public void configureMessageBroker(MessageBrokerRegistry registry) {
    registry.enableSimpleBroker("/global-message");
//    registry.setApplicationDestinationPrefixes("/app-receive");
  }

}
