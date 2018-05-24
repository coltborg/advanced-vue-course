import Vue from 'vue';
import VueRouter from 'vue-router';
import PortalVue from 'portal-vue';
import App from './App';
import routes from './router/index';

Vue.use(PortalVue);

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
