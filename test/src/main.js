import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css'
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
