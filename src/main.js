import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookie from "js-cookies";
import "element-ui/lib/theme-chalk/index.css";
import ElemntUI from "element-ui";
import api from "./api";

// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 判断是否需要登录才能访问该路由
//   // 判断是否存在token
//   const token = Cookie.getItem("Admin-Token");

//   if (!token && to.path !== "/login") {
//     // 如果token不存在且当前页面不是 '/login'则跳转到登录页面
//     next({
//       path: "/login",
//       query: {
//         redirect: to.fullPath,
//       },
//     });
//   } else if (token && to.path !== "/login") {
//     // 如果token存在且当前页面不是 '/login'则跳转到首页
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });

Vue.use(ElemntUI);
Vue.config.productionTip = false;
Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
