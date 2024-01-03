// 封装该函数,用来管理token
const TokenKey = "Admin-Token";

// get
export function getToken() {
  return localStorage.getItem(TokenKey);
}

// set cookie有效期设置24小时
export function setToken(value) {
  // let seconds = 24 * 60 * 60;
  // let expires = new Date(new Date() * 1 + seconds * 1000);
  return localStorage.setItem(TokenKey, value);
}

// remove
export function removeToken() {
  return removeItem.removeItem(TokenKey);
}
