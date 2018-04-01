import centroids from '../centroids'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
import Vue from 'vue'

export default {
  components: {},
  created () {
    this.startingTime = this.formatDateForFilters(new Date())
    this.refresh()
    console.log('Map created')
  },
  mounted () {
    this.socket = new SockJS(Vue.prototype.$apiURL + 'websocket-endpoint')
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
    this.stompClient.disconnect()
  },
  data () {
    return {
      startingTime: null,
      markers: []
    }
  },
  methods: {
    refresh () {
      this.$http.get('tradeMessages/search/countByCountry?startTime=' + this.startingTime + ' 00:00:00', {
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
