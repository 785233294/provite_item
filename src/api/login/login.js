// 文章模块的接口
import base from "../base"; // 导入接口域名列表
import { get, post } from "../../utils/request"; // 导入request中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const systemUser = {
  // 登录接口
  login(params) {
    return post(`${base.sq}/login`, qs.stringify(params));
  },
};
export default systemUser;
