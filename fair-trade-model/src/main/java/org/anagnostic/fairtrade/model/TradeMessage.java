package org.anagnostic.fairtrade.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
public class TradeMessage extends BaseEntity {

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
        AFN, EUR, ALL, DZD, USD, AOA, XCD, ARS, AMD, AWG, AUD, AZN, BSD, BHD, BDT, BBD, BYN, BZD, XOF, BMD, INR, BTN, BOB, BOV, BAM, BWP, NOK, BRL, BND, BGN, BIF, CVE, KHR, XAF, CAD, KYD, CLP, CLF, CNY, COP, COU, KMF, CDF, NZD, CRC, HRK, CUP, CUC, ANG, CZK, DKK, DJF, DOP, EGP, SVC, ERN, ETB, FKP, FJD, XPF, GMD, GEL, GHS, GIP, GTQ, GBP, GNF,
        GYD, HTG, HNL, HKD, HUF, ISK, IDR, XDR, IRR, IQD, ILS, JMD, JPY, JOD, KZT, KES, KPW, KRW, KWD, KGS, LAK, LBP, LSL, ZAR, LRD, LYD, CHF,
        MOP, MKD, MGA, MWK, MYR, MVR, MRU, MUR, XUA, MXN, MXV, MDL, MNT, MAD, MZN, MMK, NAD, NPR, NIO, NGN, OMR, PKR, PAB, PGK, PYG, PEN, PHP,
        PLN, QAR, RON, RUB, RWF, SHP, WST, STN, SAR, RSD, SCR, SLL, SGD, XSU, SBD, SOS, SSP, LKR, SDG, SRD, SZL, SEK, CHE, CHW, SYP, TWD, TJS, TZS, THB, TOP, TTD, TND, TRY, TMT, UGX, UAH, AED, USN, UYU, UYI, UZS, VUV, VEF, VND, YER, ZMW, ZWL, XBA, XBB, XBC, XBD, XTS, XXX, XAU, XPD, XPT, XAG
    }

    /**
     * Keep countries as enum, instead of in a separate table, for simplicity's sake
     */
    public enum Country {
        AA, AC, AE, AF, AG, AJ, AL, AM, AN, AO, AQ, AR, AS, AU, AV, AY, BA, BB, BC, BD, BE, BF, BG, BH, BK, BL, BM, BN, BO, BP, BR, BT, BU, BV, BX, BY, CA, CB, CD, CE, CF, CG, CH, CI, CJ, CK, CM, CN, CO, CQ, CS, CT, CU, CV, CW, CY, DA, DJ, DO, DQ, DR, EC, EG, EI, EK, EN, ER, ES, ET, EZ, FG, FI, FJ, FK, FM, FO, FP, FQ, FR, FS, GA, GB, GG, GH, GI, GJ, GK, GL, GM, GO, GP, GQ, GR, GT, GV, GY, GZ, HA, HM, HO, HQ, HR, HU, IC, ID, IM, IN, IO, IR, IS, IT, IV, IZ, JA, JE, JM, JN, JO, JQ, JU, KE, KG, KN, KR, KS, KT, KU, KZ, LA, LE, LG, LH, LI, LO, LS, LT, LU, LY, MA, MB, MD, MF, MG, MH, MI, MK, ML, MN, MO, MP, MQ, MR, MT, MU, MV, MW, MX, MY, MZ, NC, NE, NF, NG, NH, NI, NL, NO, NP, NR, NS, NT, NU, NZ, PA, PC, PE, PF, PG, PK, PL, PM, PO, PP, PS, PU, QA, RE, RM, RO, RP, RQ, RS, RW, SA, SB, SC, SE, SF, SG, SH, SI, SL, SM, SN, SO, SP, SR, ST, SU, SV, SW, SX, SY, SZ, TD, TH, TI, TK, TL, TM, TN, TO, TP, TS, TU, TV, TW, TX, TZ, UG, UK, UP, US, UV, UY, UZ, VC, VE, VI, VM, VQ, VT, WA, WE, WF, WI, WQ, WS, WZ, YM, ZA, ZI,
    }
}
