package org.anagnostic.fairtrade.dto;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

public class TradeMessageStatistic {

    private String key;
    private Long count;
    private BigDecimal percentage;

    public TradeMessageStatistic(String key, Long count) {
        this.key = key;
        this.count = count;
    }

    public TradeMessageStatistic(Date date, Long count) {
        this.key = date.toString();
        this.count = count;
    }

    public TradeMessageStatistic(Enum<?> key, Long count) {
        this.key = key.toString();
        this.count = count;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

    public BigDecimal getPercentage() {
        return percentage;
    }

    public void setPercentage(BigDecimal percentage) {
        this.percentage = percentage;
    }
}
