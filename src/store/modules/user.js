import systemUser from "../../api";
import { getToken, setToken, removeToken } from "../../utils/auth";
import { Message } from "element-ui";

const user = {
  state: {
    token: getToken(),
    name: null,
    permissions: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      return new Promise((resolve, reject) => {
        systemUser
          .login({ username, password })
          .then((res) => {
            if (res.code === 200) {
              setToken(res.token); //设置cookis
              commit("SET_TOKEN", res.token);
              resolve();
            } else {
              Message.error(res.msg);
              return;
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit("SET_TOKEN", "");
        commit("SET_PERMISSIONS", []);
        removeToken();
        resolve();
      });
    },

    // 前端推出退出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    },
  },
};
export default user;
