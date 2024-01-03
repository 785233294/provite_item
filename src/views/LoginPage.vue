<!-- 登录页面 -->
<template>
  <div class="loginPage">
    <h1>登录页面</h1>
    <form @submit.prevent="login">
      <label for="username">用户名：</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="password">密码：</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">登 录</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {},
  methods: {
    login() {
      // 处理登录逻辑
      console.log("登录成功");
    },
  },
};
</script>

<style scoped>
.loginPage {
  box-sizing: border-box;
  position: absolute;
  width: 460px;
  height: 260px;
  left: 50%;
  transform: translate(-50%, -80%);
  top: 50%;
  background-color: rgb(83, 193, 193);
  border-radius: 20px;
}

h1,
form {
  color: #fff;
  text-align: center;
}
form {
  padding-right: 30px;
}
label {
  display: inline-block;
  width: 60px;
  height: 29px;
  text-align: right;
  margin-top: 20px;
}
form > input {
  height: 29px;
  width: 200px;
  border: none;
  border-radius: 2px;
  outline: none;
  padding-left: 10px;
}
input:focus {
  border: none;
}
button {
  width: 100px;
  height: 30px;
  margin-top: 20px;
  border: none;
  background-color: rgb(162, 0, 255);
  color: #fff;
  font-size: 12px;
}
button:hover {
  background-color: rgba(162, 0, 255, 0.5);
  cursor: pointer;
}
</style>
