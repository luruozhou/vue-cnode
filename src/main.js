// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './config/router-config'
import './util/base';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter(routerConfig)

const app = new Vue({router}).$mount('#app')

window.Router = router;
