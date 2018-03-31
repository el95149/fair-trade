package org.anagnostic.fairtrade.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
public class TradeMessage extends BaseEntity{

    // TODO ensure user is always set to the logged in user, when role is 'user'. Admins can post for anyone
    @NotNull
    @ManyToOne(optional = false)
    private User user;

    @NotNull
    @Basic(optional = false)
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Currency currencyFrom;

    @NotNull
    @Basic(optional = false)
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Currency currencyTo;

    @NotNull
    @Min(0)
    @Column(precision = 12, scale = 2, nullable = false)
    private BigDecimal amountSell;

    @NotNull
    @Min(0)
    @Column(precision = 12, scale = 2, nullable = false)
    private BigDecimal amountBuy;

    @NotNull
    @Min(0)
    @Column(precision = 8, scale = 4, nullable = false)
    private BigDecimal rate;

    @Basic(optional = false)
    @NotNull
    @Column(nullable = false)
    private Timestamp timePlaced;

    @NotNull
    @Basic(optional = false)
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Country originatingCountry;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Currency getCurrencyFrom() {
        return currencyFrom;
    }

    public void setCurrencyFrom(Currency currencyFrom) {
        this.currencyFrom = currencyFrom;
    }

    public Currency getCurrencyTo() {
        return currencyTo;
    }

    public void setCurrencyTo(Currency currencyTo) {
        this.currencyTo = currencyTo;
    }

    public BigDecimal getAmountSell() {
        return amountSell;
    }

    public void setAmountSell(BigDecimal amountSell) {
        this.amountSell = amountSell;
    }

    public BigDecimal getAmountBuy() {
        return amountBuy;
    }

    public void setAmountBuy(BigDecimal amountBuy) {
        this.amountBuy = amountBuy;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }

    public Timestamp getTimePlaced() {
        return timePlaced;
    }

    public void setTimePlaced(Timestamp timePlaced) {
        this.timePlaced = timePlaced;
    }

    public Country getOriginatingCountry() {
        return originatingCountry;
    }

    public void setOriginatingCountry(Country originatingCountry) {
        this.originatingCountry = originatingCountry;
    }

    /**
     * Keep currencies as enum, instead of in a separate table, for simplicity's sake
     */
    public enum Currency {
        GBP, EUR, USD
    }

    /**
     * Keep countries as enum, instead of in a separate table, for simplicity's sake
     */
    public enum Country {
        FR, GB, GR, US, IE
    }


}
