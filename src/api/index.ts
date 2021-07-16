import request from "../plugins/request";

// 登录
export function login(data: object) {
  return request({
    url: "/login ",
    method: "get"
  });
}