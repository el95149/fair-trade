package org.anagnostic.fairtrade;

import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.Base64Utils;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.AFTER_TEST_METHOD;
import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.BEFORE_TEST_METHOD;
import static org.springframework.test.context.jdbc.SqlConfig.TransactionMode.ISOLATED;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class SpringBootApplicationTests {

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testAPI() throws Exception {
        this.mockMvc.perform(get("/api")
                .header(HttpHeaders.AUTHORIZATION,
                        "Basic " + Base64Utils.encodeToString("johnwick@syndicate.com:johnie123".getBytes())))
                .andExpect(status().isOk());
    }

    @Test
    @Sql(
            scripts = "classpath:cleanup_trade_messages.sql",
            executionPhase = AFTER_TEST_METHOD,
            config = @SqlConfig(transactionMode = ISOLATED)
    )
    public void testPostTradeMessage() throws Exception {
        this.mockMvc.perform(post("/api/tradeMessages")
                .header(HttpHeaders.AUTHORIZATION,
                        "Basic " + Base64Utils.encodeToString("johnwick@syndicate.com:johnie123".getBytes()))
                .contentType(MediaType.APPLICATION_JSON_UTF8).content(
                        "{\n" +
                                "\t\"currencyFrom\": \"EUR\",\n" +
                                "\t\"currencyTo\": \"USD\",\n" +
                                "\t\"amountSell\": 100.12,\n" +
                                "\t\"amountBuy\": 120.55,\n" +
                                "\t\"rate\": 0.89,\n" +
                                "\t\"timePlaced\": \"2018-04-01T22:00:00.000+0300\",\n" +
                                "\t\"originatingCountry\": \"BE\",\n" +
                                "\t\"user\": \"http://localhost:8080/api/users/1\"\n" +
                                "}"))
                .andDo(print()).andExpect(status().isCreated());
    }

    @Test
    @Sql(
            scripts = "classpath:setup_statistics_tests.sql",
            executionPhase =BEFORE_TEST_METHOD,
            config = @SqlConfig(transactionMode = ISOLATED)
    )
    @Sql(
            scripts = "classpath:cleanup_trade_messages.sql",
            executionPhase =AFTER_TEST_METHOD,
            config = @SqlConfig(transactionMode = ISOLATED)
    )
    public void testStatistics() throws Exception {

        this.mockMvc.perform(get("/api/tradeMessages/search/countByCountry?startTime=2018-04-01 00:00:00.000")
                .header(HttpHeaders.AUTHORIZATION,
                        "Basic " + Base64Utils.encodeToString("johnwick@syndicate.com:johnie123".getBytes())))
                .andExpect(status().isOk())
        .andExpect(jsonPath("$.size()", Matchers.greaterThan(0)));

        this.mockMvc.perform(get("/api/tradeMessages/search/countByCurrencyMarket?startTime=2018-04-01 00:00:00.000" +
                "&currencyFrom=EUR&currencyTo=USD")
                .header(HttpHeaders.AUTHORIZATION,
                        "Basic " + Base64Utils.encodeToString("johnwick@syndicate.com:johnie123".getBytes())))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()", Matchers.greaterThan(0)));
    }
}
