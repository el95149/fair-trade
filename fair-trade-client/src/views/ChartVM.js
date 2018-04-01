import LineChart from '@/views/LineChart'

export default {
  name: 'chart',
  components: {
    LineChart
  },
  created () {
    this.startingTime = this.formatDateForFilters(new Date())
    Promise.all([this.$http.get('tradeMessages/currencies')]).then(([currencies]) => {
      this.currencies = currencies.data
      this.refresh()
    })
  },
  mounted () {
    // poll server for new data every 1 hour
    this.interval = setInterval(() => {
      console.log('refreshing')
      this.refresh()
    }, 60 * 1000 * 60)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  data () {
    return {
      currencies: [],
      startingTime: null,
      currencyFrom: 'EUR',
      currencyTo: 'GBP',
      chartData: null,
      interval: null
    }
  },
  methods: {
    refresh () {
      this.$http.get('tradeMessages/search/countByCurrencyMarket?currencyFrom=' + this.currencyFrom +
        '&currencyTo=' + this.currencyTo +
        '&startTime=' + this.startingTime + ' 00:00:00', {
        transformResponse: [function (data) {
          var dataObj = JSON.parse(data)
          let labels = []
          let values = []
          dataObj.forEach((statisticEntry, index) => {
            labels.push(statisticEntry.key)
            values.push(statisticEntry.count)
          })
          let chartData = {
            labels: labels,
            datasets: [
              {
                label: 'Message volume history',
                backgroundColor: '#f87979',
                data: values
              }
            ]
          }
          return chartData
        }]
      })
        .then(response => {
          this.chartData = response.data
        })
    }
  }
}
