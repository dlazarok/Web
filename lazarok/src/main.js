import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Main from "./components/Main.vue"
import Purchase from "@/components/Purchase";
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "action",
  routes:[
    { path: "/Index", component: Main },
    { path: "/Purchase", component: Purchase }

  ],
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
