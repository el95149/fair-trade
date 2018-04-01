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
import FullCalendar from 'vue-full-calendar'
import VueLayers from 'vuelayers'

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
// window.jQuery = window.$ = require('jquery')
Vue.use(FullCalendar)
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
    // TODO convert to auto-complete, to remove hard coded limit
    getContexts () {
      return this.$http.get('contexts?size=' + Vue.prototype.$maxPageSize)
    },
    getCompetentAuthorities () {
      return this.$http.get('competentAuthorities?projection=simpleRole&size=1000')
    },
    getDocumentTypesByContext (context) {
      return this.$http.get('documentTypes/search/findByContexts_Title?context=' + context + '&projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getDocumentTypes () {
      return this.$http.get('documentTypes/')
    },
    getDepartments () {
      return this.$http.get('departments?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getUserAccessibleDepartments () {
      return this.$http.get('accessibleDepartments?projection=simpleRole')
    },
    checkPermissionsByUrl (url) {
      let resolve = this.$router.resolve(url)
      let allowed = true
      if (resolve != null && resolve.route.meta.auth != null) {
        allowed = this.$auth.check(resolve.route.meta.auth.roles)
      }
      return allowed
    },
    getContractTypes () {
      return this.$http.get('contractTypes?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getMunicipalSections () {
      return this.$http.get('municipalSections?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getOperationalAxes () {
      return this.$http.get('operationalAxes?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getFundingSources () {
      return this.$http.get('fundingSources/search/findByCompletedPercentage?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getCoreFundingSources () {
      return this.$http.get('coreFundingSources?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getAssignmentProcesses () {
      return this.$http.get('assignmentProcesses?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getAssignmentCriterias () {
      return this.$http.get('assignmentCriterias?projection=simpleRole&size=' + Vue.prototype.$maxPageSize)
    },
    getBondIssuers () {
      return this.$http.get('bondIssuers?projection=simpleRole&size=1000')
    },
    getCPVs () {
      return this.$http.get('cPVs?projection=simpleRole&size=1000')
    },
    getCommitteeTypes () {
      return this.$http.get('committeTypes?projection=simpleRole&size=1000')
    },
    getStudies () {
      return this.$http.get('studies?projection=simpleRoleYear&size=1000')
    },
    getPrecontractual (id) {
      return this.$http.get('precontractuals/' + id)
    },
    getPrecontractuals () {
      return this.$http.get('precontractuals?projection=simpleRole&size=1000')
    },
    getActionApprovalStep (id) {
      return this.$http.get('actionApprovalSteps/' + id)
    },
    getAuthorisingBodies () {
      return this.$http.get('authorisingBodies?projection=simpleRole&size=1000')
    },
    getCommittees () {
      return this.$http.get('committees?projection=simpleRole&size=1000')
    },
    getSuppliers () {
      return this.$auth.check('Auxiliary_R') ? this.$http.get('suppliers?projection=inlinedSupplier&size=5000') : undefined
    },
    getBudgetSchemas () {
      return this.$http.get('budgetSchemas?projection=budgetSchema&size=100')
    },
    searchSuppliers (query) {
      let emptyResponse = {
        data: {
          _embedded: {
            suppliers: []
          }
        }
      }
      if (!this.$auth.check('Auxiliary_R')) {
        return Promise.resolve(emptyResponse)
      }
      this.isLoading = true
      return this.$http.get('suppliers/search/findByQuery?projection=inlinedSupplier', {
        params: {
          query: query,
          size: this.$autocompleteSearchSize
        }
      }).then(response => {
        this.isLoading = false
        return response
      }).catch(e => {
        this.isLoading = false
        throw e
      })
    },
    getPersons () {
      return this.$http.get('persons?projection=simplePerson&size=1000')
    },
    getPrecontractualExecutionPlans (id) {
      return this.$http.get('precontractuals/' + id + '/executionPlan')
    },
    getPrecontractualStep (id) {
      return this.$http.get('precontractualSteps/' + id)
    },
    getDetails () {
      return this.$http.get('details?projection=simpleRole&size=1000')
    },
    getSigners () {
      return this.$http.get('signers?projection=simpleRole&size=1000')
    },
    getActTypes () {
      return this.$http.get('actTypes?projection=simpleRole&size=1000')
    },
    getMediums () {
      return this.$http.get('mediums?projection=simpleRole&size=1000')
    },
    getObjections () {
      return this.$http.get('objections?projection=simpleObjection&size=1000')
    },
    getTenderRequests () {
      return this.$http.get('tenderRequests?projection=inlinedTenderRequest&size=1000')
    },
    getPostings () {
      return this.$http.get('postings?projection=inlinedPosting&size=1000')
    },
    getMinutesItemTypes () {
      return this.$http.get('minutesItemTypes?projection=simpleRole&size=1000')
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
    limitReachedText (count) {
      return 'και ' + count + ' ακόμα αποτελέσματα'
    },
    getPersonFullName ({firstName, lastName}) {
      return `${firstName} ${lastName}`
    },
    supplierCustomLabel (supplier) {
      return 'Επωνυμία: ' + supplier.companyName + ', ΑΦΜ: ' + supplier.vat
    },
    getObjectionLabel (objection) {
      return this.getMessage(objection.objectionType) + '-' + objection.supplier.companyName
    },
    offerCustomLabel (offer) {
      return offer.title + ', Προμηθευτής: (' + this.supplierCustomLabel(offer.supplier) + ')'
    },
    offerItemCustomLabel (offerItem) {
      return this.getStudySectionLabel(offerItem.section) + ', Προσφερόμενο Ποσό: ' + this.formatAmount(offerItem.amount)
    },
    getStudySectionLabel (selectedOption, id) {
      return selectedOption.title + ' (' + this.formatAmount(selectedOption.amount) + ')'
    },
    getConcessionaireLabel (concessionaire) {
      return 'Όνομα: ' + concessionaire.offer.supplier.companyName + ', ΑΦΜ: ' + concessionaire.offer.supplier.vat
    },
    getDocumentTypeLabel (documentType) {
      return this.getMessage(documentType.title)
    },
    getContractFinancingLabel (contractFinancing) {
      return 'Αριθμός Παραστατικού: ' + contractFinancing.title
    },
    getFinancialCommitmentLabel (financialCommitment) {
      return 'Αριθμός Δέσμευσης: ' + financialCommitment.title
    },
    getAssignmentProcessStepLabel (assignmentProcessStep) {
      return assignmentProcessStep.order + ' - ' + this.getMessage(assignmentProcessStep.step.title)
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
