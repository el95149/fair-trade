package org.anagnostic.fairtrade.repository;

import org.anagnostic.fairtrade.model.TradeMessage;
import org.anagnostic.fairtrade.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.AFTER_TEST_METHOD;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.BEFORE_TEST_METHOD;
import static org.springframework.test.context.jdbc.SqlConfig.TransactionMode.ISOLATED;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class TradeMessageRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TradeMessageRepository tradeMessageRepository;

    @Test
    @Sql(
            scripts = "classpath:cleanup_trade_messages.sql",
            executionPhase = AFTER_TEST_METHOD,
            config = @SqlConfig(transactionMode = ISOLATED)
    )
    public void testCreate() throws Exception{
        final User user = userRepository.findOne(1L);
        TradeMessage tradeMessage = new TradeMessage();
        tradeMessage.setUser(user);
        tradeMessage.setAmountBuy(new BigDecimal(1000));
        tradeMessage.setAmountSell(new BigDecimal(741.10));
        tradeMessage.setRate(new BigDecimal(0.7471));
        tradeMessage.setCurrencyFrom(TradeMessage.Currency.EUR);
        tradeMessage.setCurrencyTo(TradeMessage.Currency.USD);
        tradeMessage.setOriginatingCountry(TradeMessage.Country.GR);
        ZonedDateTime utc = ZonedDateTime.now(ZoneOffset.UTC);
        tradeMessage.setTimePlaced(Timestamp.from(utc.toInstant()));
        tradeMessage.setCreateDate(tradeMessage.getTimePlaced());
        tradeMessage.setUpdateDate(tradeMessage.getTimePlaced());
        tradeMessage.setCreateUser(0L);
        tradeMessage.setUpdateUser(0L);
        tradeMessage.setIsActive(Boolean.TRUE);

        tradeMessage = tradeMessageRepository.save(tradeMessage);

        assertThat(tradeMessage.getId() != null);
    }
}
