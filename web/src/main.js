import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Module styles
import 'aos/dist/aos.css'
import 'font-awesome-animation/dist/font-awesome-animation.css'
// Global Components
import SectionHead from '@/components/SectionHead.vue'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('section-head', SectionHead)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    AOS.init({
      duration: 1200
    })
  }
}).$mount('#app')
