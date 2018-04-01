package org.anagnostic.fairtrade.notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

/**
 * Service class for sending notification messages.
 */
@Service
public class NotificationService {
  
  // The SimpMessagingTemplate is used to send Stomp over WebSocket messages.
  @Autowired
  private SimpMessagingTemplate messagingTemplate;
  
  /**
   * Send notification to channel "/user/queue/notify".
   *
   * The message will be sent to anyone on that channel.
   * 
   * @param notification The notification message.
   */
  public void notify(Notification notification) {
    messagingTemplate.convertAndSend(
      "/global-message/tick",
      notification
    );
    return;
  }
  
} // class NotificationService
