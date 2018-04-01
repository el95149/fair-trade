import centroids from '../centroids'

export default {
  components: {},
  created () {
    this.refresh()
    console.log('Map created')
  },
  mounted () {
    // poll server for new notifications every X minutes
    this.interval = setInterval(() => {
      console.log('refreshing')
      this.refresh()
    }, 5 * 1000)

    console.log('Map mounted')
  },
  destroyed () {
    clearInterval(this.interval)
  },
  data () {
    return {
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
          this.$message.success({message: 'Trade Messages refreshed', showClose: true, duration: 2000})
        })
    }
  }
}
