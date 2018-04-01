// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueEvents from 'vue-events'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import money from 'v-money'
import moment from 'moment'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

Vue.prototype.$apiURL = 'http://127.0.0.1:8080/api/'

Vue.prototype.$http = axios.create({
  baseURL: Vue.prototype.$apiURL,
  headers: {
    post: {'Content-Type': 'application/json'},
    put: {'Content-Type': 'application/json'},
    patch: {'Content-Type': 'application/json'}
  }
})
Vue.prototype.$minAmount = -9999999999.99
Vue.prototype.$maxAmount = 9999999999.99
Vue.prototype.$maxPageSize = 2147483647
Vue.prototype.$delay = 200
Vue.prototype.$notificationsPollingInterval = 10
Vue.prototype.$autocompleteSearchSize = 50
// Default vars set up from localStorage (ie, user has come back)
// Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
// Vue.prototype.$http.defaults.headers.common['Access-Token'] = localStorage.getItem('auth_token');

/* vue-auth */
Vue.axios = Vue.prototype.$http
Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/basic.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: {
    url: 'login?projection=loginPerson',
    method: 'POST',
    redirect: '/calendar',
    fetchUser: false
  },
  fetchData: {
    url: 'refreshUser?projection=loginPerson',
    enabled: true
  },
  refreshData: {
    url: 'refreshUser?projection=loginPerson',
    enabled: false,
    interval: 0
  },
  rolesVar: 'roles',
  forbiddenRedirect: {
    path: '/pages/error/403'
  },
  tokenExpired () {
    return false
  },
  parseUserData (response) {
    // used to reset user data, upon page refresh
    let data = response
    return data
  }
})

Vue.use(BootstrapVue)
Vue.use(Element, {locale})
Vue.use(VueEvents)
Vue.use(VeeValidate, {
  locale: 'en',
  // necessary, to allow working together with vuetable-2
  fieldsBagName: 'formFields'
})
// register lodash utility library
Vue.use(VueLodash, lodash)
// register 'v-money' directive and component
Vue.use(money, {
  decimal: ',',
  thousands: '.',
  precision: 2,
  masked: false
})

Vue.use(VueLayers, {
  bindToProj: 'EPSG:4326'
})

Vue.prototype.$http.interceptors.response.use((response) => { // intercept the global error
  return response
}, function (error) {
  // let originalRequest = error.config
  if (error.response == null || error.response.status === 500) {
    // no communication with REST API
    Vue.router.push('/pages/error/500')
  } else if (error.response.status === 401) {
    Vue.auth.logout({
      redirect: '/pages/error/401'
    })
  } else if (error.response.status !== 409 && error.response.status !== 406 && !error.response.request.responseURL.endsWith('/login')) {
    // all other errors, except validation
    Vue.prototype.$message.error(Vue.prototype.$messages.errorLoad)
  }
  // Do something with response error
  return Promise.reject(error)
}
)
// inject helper functions
Vue.mixin({
  data: function () {
    return {
      rowsPerPage: 10,
      rowsPerPageOptions: [5, 10, 20, 50],
      globalDateFormat: 'dd/MM/yyyy',
      isLoading: false
    }
  },
  methods: {
    isValid (fieldName, scope) {
      return !this.$validator.errors.has(fieldName, scope) ? null : false
    },
    convertEntityToURI (entity) {
      return entity == null ? null : entity._links.self.href
    },
    convertEntitiesToURIs (entities) {
      var entityURIs = Vue._.map(entities, function (entity) {
        return entity._links.self.href
      })
      return entityURIs
    },
    checkPermissionsByUrl (url) {
      let resolve = this.$router.resolve(url)
      let allowed = true
      if (resolve != null && resolve.route.meta.auth != null) {
        allowed = this.$auth.check(resolve.route.meta.auth.roles)
      }
      return allowed
    },
    getMessage (key) {
      return key
    },
    formatDate (value) {
      return value != null ? moment(value).format('DD/MM/YYYY') : null
    },
    formatDateForFilters (value) {
      return value != null ? moment(value).format('YYYY-MM-DD') : null
    },
    formatDateTime (value) {
      return moment(value).format('DD/MM/YYYY HH:mm:ss')
    },
    formatBytes (bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return '0 Bytes'
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    },
    formatAmount (amount) {
      return amount === null ? null : amount.toLocaleString('el', {
        style: 'currency',
        currency: 'EUR'
      }).replace(',00', '')
    },
    formatPercentage (percentage) {
      return percentage === null ? null : percentage.toLocaleString('el', {
        style: 'decimal'
      }).replace(',00', '') + '%'
    },
    formatDurationDays (duration) {
      return duration === 1 ? duration + ' ημέρα' : duration + ' ημέρες'
    },
    handleSuccess (response) {
      this.success(this.$messages.successAction)
    },
    handleError (e) {
      console.log(e)
      this.error(this.$messages.errorAction)
    },
    logout () {
      this.$auth.logout({
        makeRequest: false,
        data: {}, // data: {} in axios
        success: function () {
          console.log('logout successful')
        },
        error: function () {
          console.log('logout error')
        },
        redirect: '/pages/login'
      })
    },
    customFetch (apiUrl, httpOptions) {
      return this.$http.get(apiUrl, httpOptions)
    },
    success (message) {
      this.$message.success({message: message, showClose: true, duration: 6000})
    },
    error (message) {
      this.$message.error({message: message, showClose: true, duration: 6000})
    },
    warning (message) {
      this.$message.warning({message: message, showClose: true, duration: 6000})
    },
    trimWordsUpToMaxCharLength (text, maxLength) {
      if (text.length <= maxLength) {
        return text
      }
      // trim the string to the maximum length
      let trimmedString = text.substr(0, maxLength - 3)
      // re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
      return trimmedString + '...'
    },
    exportEntities (entityName, exportSuffix, exportType, params, sortOrder) {
      let url = entityName + '/export/' + exportSuffix + '/' + exportType + '?page=1&size=' + Vue.prototype.$maxPageSize
      for (var param in params) {
        if (params[param] != null) {
          url = url + '&' + param + '=' + params[param]
        }
      }
      url = url + '&sort='
      sortOrder.forEach(order => {
        url = url + order.sortField + ',' + order.direction
      })
      url = url + '&email=' + this.$auth.user().email
      window.open(Vue.prototype.$apiURL + url)
    },
    exportEntity (entityName, exportSuffix, exportType, data) {
      let url = entityName + '/export/' + exportSuffix + '/' + exportType + '?data=' + data
      url = url + '&email=' + this.$auth.user().email
      window.open(Vue.prototype.$apiURL + url)
    },
    /* When called all fields must be filled (if there is no action at some callback, then null is filled) */
    yesNoDialogue (message, title, yesCallback, noCallback) {
      this.$confirm(message, title, {
        confirmButtonText: this.$messages.yes,
        cancelButtonText: this.$messages.no,
        cancelButtonClass: 'btn btn-warning',
        confirmButtonClass: 'btn btn-danger',
        closeOnClickModal: false,
        closeOnPressEscape: false,
        type: 'warning'
      }).then(() => {
        if (yesCallback != null) {
          yesCallback()
        }
      }).catch(e => {
        if (noCallback != null) {
          noCallback()
        }
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
