// 引入vue\vuex
import Vue from "vue";
import Vuex from "vuex";

// 使用vuex
/*
Tip:在这里可能有些人会疑惑,vuex为什么在store==>index.js中引用并使用,
因为在main.js中引入并使用Vue.use(vuex)会导致一个顺序问题,先解析store后执行Vue.use(vuex),
*/
Vue.use(Vuex);

// 响应式组件的动作
const actions = {};

// 操作数据
const mutations = {};

// 用于存储数据
const state = {};

// 用来将state数据进行加工
const getters = {};

// 创建store
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});

// 暴露store 使其他VueComponents可以使用   简称vc组件实例对象
export default store;

// Vuex模块化+命名空间
/*
1.这是啥
如果我们写的state，actions什么的是服务于多个种类的，比如有管加法的，有管人员的，这样放到一起很乱，所以可以把它们拆开

2.目的
让代码更好维护，让多种数据分类更加明确。

3.使用方式：
可以都写到index.js里，也可以每个命名空间分别拆成多个js文件


const countAbout = {
    namespaced:true,//开启命名空间
    state:{x:1},
    mutations: {
        //...
     },
    actions: {
        //...
      },
    getters: {
         //...
    }
    }

    const personAbout = {
    namespaced:true,//开启命名空间
        state: {
        //...
    },
    mutations: {
        //...
     },
    actions: {
        //...
      },
    getters: {
         //...
    }
    }

    const store = new Vuex.Store({
    modules: {
     countAbout,
     personAbout
    }
 })
*/
