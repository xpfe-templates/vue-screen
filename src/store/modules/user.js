/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-03 07:05:04
 * @modify date 2017-09-27 02:59:30
 * @desc [用户store，主要放置用户相关]
*/

import { login, loginback, logout, getUserInfo } from 'api/user'
import { getToken, setToken, removeToken } from 'utils/auth'
import md5 from 'js-md5'
import { deepClone } from 'xp-utils'

const user = {
  state: {
    userInfo: {}, // 用户信息
    accessToken: getToken(), // 用户token
    userId: '', // 用户Id
    // roles: [], // 用户权限角色列表
  },

  mutations: {
    SET_USERINFO: (state, data) => {
      state.userInfo = data
    },
    SET_TOKEN: (state, data) => {
      state.token = data
    },
    SET_USERID: (state, data) => {
      state.userId = data
    },
  },

  actions: {
    // 登录
    Login({ commit }, data) {
      data = deepClone(data)
      data.userName = data.userName.trim()
      data.pwd = md5(data.pwd)
      data.redirectUri = 'http://localhost:3000'
      data.operateClientId = 'startdt-admin'
      return login(data)
      .then(res => {
        const resData = res.data
        setToken(resData.accessToken)
        commit('SET_TOKEN', resData.accessToken)
        commit('SET_USERID', resData.userId)
        console.log(1, res)
        return loginback(resData)
      })
      .then(backRes => {
        console.log(2, backRes)
        return getUserInfo()
      })
      .then(userRes => {
        console.log(3, userRes)
        commit('SET_USERINFO', userRes.data)
      })
    },
    // 获取用户信息
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
        .then(res => {
          const data = res.data
          if (res.code === 200) {
            commit('SET_USERINFO', data)
            resolve(data)
          } else {
            reject(res.errorMsg)
          }
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
        .then(res => {
          const data = res.data
          if (res.code === 200) {
            commit('SET_TOKEN', '')
            commit('SET_USERID', '')
            removeToken()
            resolve(data)
          } else {
            reject(res.errorMsg)
          }
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    // 前端登出
    FeLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USERID', '')
        removeToken()
        resolve()
      })
    },
  }
}

export default user
