// 封装该函数,用来管理token
const TokenKey = "Admin-Token";

import Cookie from "js-cookies";

// get
export function getToken() {
  return Cookie.getItem(TokenKey);
}

// set cookie有效期设置24小时
export function setToken(value) {
  let seconds = 24 * 60 * 60;
  let expires = new Date(new Date() * 1 + seconds * 1000);
  console.log(TokenKey, value, expires);
  return Cookie.setItem(TokenKey, value, expires);
}

// remove
export function removeToken() {
  return Cookie.removeItem(TokenKey);
}
