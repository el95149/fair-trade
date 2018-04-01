package org.anagnostic.fairtrade.repository;

import org.anagnostic.fairtrade.dto.TradeMessageStatistic;
import org.anagnostic.fairtrade.model.TradeMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.UUID;

@RepositoryRestResource
public interface TradeMessageRepository extends JpaRepository<TradeMessage, Long> {


    @Query("SELECT new org.anagnostic.fairtrade.dto.TradeMessageStatistic(t.originatingCountry, count(t))" +
            " FROM TradeMessage  t" +
            " WHERE t.timePlaced >= ?1" +
            " GROUP BY t.originatingCountry")
    Collection<TradeMessageStatistic> countByCountry(@Param("startTime") Timestamp startTime);

    @Query("SELECT new org.anagnostic.fairtrade.dto.TradeMessageStatistic(FUNCTION('DATE_FORMAT', t.timePlaced, '%Y-%m-%d %H:00'), count(t))" +
            " FROM TradeMessage  t" +
            " WHERE t.timePlaced >= ?1" +
            " AND t.currencyFrom = ?2" +
            " AND t.currencyTo = ?3" +
            " GROUP BY FUNCTION('DATE_FORMAT', t.timePlaced, '%Y-%m-%d %H:00')" +
            " ORDER BY FUNCTION('DATE_FORMAT', t.timePlaced, '%Y-%m-%d %H:00')")
    Collection<TradeMessageStatistic> countByCurrencyMarket(Timestamp startTime, TradeMessage.Currency currencyFrom, TradeMessage.Currency currencyTo);
}
