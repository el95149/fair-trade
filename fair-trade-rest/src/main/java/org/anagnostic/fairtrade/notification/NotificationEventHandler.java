package org.anagnostic.fairtrade.notification;

import org.anagnostic.fairtrade.model.TradeMessage;
import org.anagnostic.fairtrade.repository.TradeMessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler(TradeMessage.class)
public class NotificationEventHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(NotificationEventHandler.class);

    @Value("${notifications.tradeMessagesInterval:10}")
    private int tradeMessagesNotificationInterval;

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private TradeMessageRepository tradeMessageRepository;

    @HandleAfterCreate
    public void handleAfterCreate(TradeMessage tradeMessage) {
        final long count = tradeMessageRepository.count();
        // notify clients every N new trade messages, to avoid bottlenecks
        if (count % tradeMessagesNotificationInterval == 0) {
            LOGGER.info("Notifying clients");
            notificationService.notify(new Notification("TRADE_MESSAGES_UPDATED"));
        }
    }
}
