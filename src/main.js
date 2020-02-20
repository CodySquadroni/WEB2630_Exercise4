import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// ToDo: Create a const called eventBus that is empty

new Vue({
  render: h => h(App),
}).$mount('#app')
