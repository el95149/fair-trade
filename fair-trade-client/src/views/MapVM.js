import centroids from '../centroids'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
  components: {},
  created () {
    this.refresh()
    console.log('Map created')
  },
  mounted () {
    // poll server for new notifications every X minutes (deprecated, in favour of websockets)
    // this.interval = setInterval(() => {
    //   console.log('refreshing')
    //   // this.refresh()
    // }, 5 * 1000)

    this.socket = new SockJS('http://localhost:8080/api/websocket-endpoint')
    this.stompClient = Stomp.over(this.socket)
    this.stompClient.connect({}, (frame) => {
      this.connected = true
      this.stompClient.subscribe('/global-message/tick', (tick) => {
        let messageBody = JSON.parse(tick.body)
        if (messageBody.content === 'TRADE_MESSAGES_UPDATED') {
          this.refresh()
        }
      })
    }, (error) => {
      console.log(error)
    })
    console.log('Map mounted')
  },
  destroyed () {
    // clearInterval(this.interval)
    this.stompClient.disconnect()
  },
  data () {
    return {
      isConnected: false,
      socketMessage: '',
      interval: null,
      markers: []
    }
  },
  methods: {
    refresh () {
      this.$http.get('tradeMessages/search/countByCountry?startTime=2018-01-01%2000:00:00.000', {
        transformResponse: [function (data) {
          var dataObj = JSON.parse(data)
          dataObj.forEach((value, index) => {
            let centroid = centroids.find(function (centroid) {
              return centroid.fips === value.key
            })
            let coordinates = [
              Number.parseFloat(centroid.lng),
              Number.parseFloat(centroid.lat)
            ]
            value.coordinates = coordinates
          })
          return dataObj
        }]
      })
        .then(response => {
          this.markers = response.data
          this.success('Trade Messages refreshed')
        })
    }
  }
}
