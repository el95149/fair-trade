export default {
  name: 'Error',
  components: {},
  data: function () {
    return {
      code: null
    }
  },
  created () {
    if (this.$route.params.code != null) {
      this.code = this.$route.params.code
    }
    console.log('Error created')
  },
  mounted () {
    console.log('Error mounted')
  },
  destroyed: function () {
    console.log('Error destroyed')
  },
  computed: {},
  methods: {}
}
