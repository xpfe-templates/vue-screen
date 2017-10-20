/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-11 02:54:49
 * @modify date 2017-09-27 03:11:33
 * @desc [login api]
*/

import fetch from 'utils/axios'

export function login (data) {
  return fetch({
    baseURL: 'https://auth.startdtapi.com', // 调用账号中心
    url: '/login',
    method: 'post',
    data,
  })
}

export function loginback (data) {
  return fetch({
    url: '/back',
    method: 'post',
    data,
  })
}

export function logout () {
  return fetch({
    url: '/auth/user/logOut',
    method: 'post',
  })
}

export function getUserInfo () {
  return fetch({
    url: '/auth/user/getPersonInfo',
    method: 'post',
  })
}
