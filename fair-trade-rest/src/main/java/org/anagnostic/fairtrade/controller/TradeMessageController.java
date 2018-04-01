package org.anagnostic.fairtrade.controller;


import org.anagnostic.fairtrade.dto.TradeMessageStatistic;
import org.anagnostic.fairtrade.model.TradeMessage;
import org.anagnostic.fairtrade.repository.TradeMessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Timestamp;
import java.util.Collection;

@RepositoryRestController
@RequestMapping("tradeMessages")
public class TradeMessageController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TradeMessageController.class);

    @Autowired
    private TradeMessageRepository tradeMessageRepository;

    @GetMapping("search/countByCountry")
    public ResponseEntity<?> countByCountry(@RequestParam("startTime") Timestamp startTime) {
        final Collection<TradeMessageStatistic> tradeMessageStatistics = tradeMessageRepository.countByCountry(startTime);
        return ResponseEntity.ok(tradeMessageStatistics);
    }

    @GetMapping("search/countByCurrencyMarket")
    public ResponseEntity<?> countByCurrencyMarket(@RequestParam("currencyFrom") TradeMessage.Currency currencyFrom,
                                                   @RequestParam("currencyTo") TradeMessage.Currency currencyTo,
                                                   @RequestParam("startTime") Timestamp startTime) {
        final Collection<TradeMessageStatistic> tradeMessageStatistics = tradeMessageRepository
                .countByCurrencyMarket(startTime, currencyFrom, currencyTo);
        return ResponseEntity.ok(tradeMessageStatistics);
    }

    @GetMapping("currencies")
    public ResponseEntity<?> getCurrencies() {
        return ResponseEntity.ok(TradeMessage.Currency.values());
    }
}
