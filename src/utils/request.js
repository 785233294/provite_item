// 引入插件
import axios from "axios";
import QS from "qs";
// 路由守卫
import router from "../router";
import { getToken, removeToken } from "./auth.js";
import { Message } from "element-ui";

// // 环境的切换(注释了通过环境变量控制baseUrl的值。考虑到接口会有多个不同域名的情况，所以准备通过js变量来控制接口域名)
// if (process.env.NODE_ENV == "development") {
//   axios.defaults.baseURL = "https://www.development.com";
// } else if (process.env.NODE_ENV == "debug") {
//   axios.defaults.baseURL = "https://www.ceshi.com";
// } else if (process.env.NODE_ENV == "production") {
//   axios.defaults.baseURL = "https://www.production.com";
// }

// 创建 axios 实例
const service = axios.create({
  //  通用请求的地址前缀
  //  baseURL: "通用请求的地址前缀",
  //   baseURL: process.env.BASE_API,
  //  超时时长
  timeout: 5000,
  // 请求带上 cookie
  withCredentials: true,
  // 定义消息头
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求头中携带token
    // config.headers.Authorization = localStorage.getItem("token");
    config.headers["Admin-Token"] = getToken(); //动态token名
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 接受请求到的数据
    const res = response.data;

    if (res.code === 200) {
      //请求成功返回数据
      return res;
    } else {
      // 请求失败,根据状态码提示错误信息
      switch (res.code) {
        case 401:
          /*
        401无登录权限: 清除Vuex中的token--> 提示错误信息 --> 跳转到登录页面
        */
          // localStorage.removeItem("token");
          removeToken();
          Message({
            message: res.message,
            type: "error",
            duration: 500,
          });
          router.push("/login");
          break;

        case 403:
          /*
            403 没有操作权限:弹窗提示信息
            */
          alert("没有操作权限");
          break;
        case 404:
          /*
            404找不到请求页面或资源:直接弹窗提示信息
            */
          alert("请求的资源不存在");
          break;
        case 500:
          alert("服务器内部错误");
          break;
        default:
          alert(res.message);
          break;
      }
    }
  },
  (error) => Promise.reject(error)
);

// 默认导出封装好的axios
// export default service;

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
