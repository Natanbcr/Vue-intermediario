import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-578d5.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})