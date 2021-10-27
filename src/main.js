import Vue from 'vue';
import App from './App.vue';
import "./assets/main.css";
import "./assets/css/font-awesome-4.7.0/css/font-awesome.min.css"




Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
