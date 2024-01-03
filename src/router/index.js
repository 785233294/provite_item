import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout";

Vue.use(VueRouter); // 浅浅的安装下Router插件

/** 解决相同路径跳转报错 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginPage.vue"), //路由懒加载
    meta: {
      title: "登录",
    },
  },
  {
    path: "/vueLayout",
    name: "vueLayout",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/Error",
    name: "error",
    component: () => import("../views/404.vue"),
    meta: ["修改密码"],
    hidden: true,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
