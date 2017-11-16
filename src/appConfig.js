/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-10-16 11:16:57
 * @modify date 2017-11-16 08:26:01
 * @desc [配置信息]
*/

const env = process.env.NODE_ENV

const deviceInfo = '' // 应用信息
const authErrorCode = 3000 // 没有权限的错误码
const tokenKey = 'screen-token' // 保存的token值
let htmlTitle = 'Vue Screen - dev'
let baseURL = 'https://www.easy-mock.com/mock/5a0bf56bdbfe9e4cbd641706/unmanned'
let authURL = 'https://www.easy-mock.com/mock/59f02babb120c445fab92be2/account'

if (env === 'production') {
  htmlTitle = 'Vue Screen'
  baseURL = 'https://api.example.com'
  authURL = 'https://auth.example.com'
} else if (env === 'testing') {
  htmlTitle = 'Vue Screen - test'
  baseURL = 'https://apitest.example.com'
  authURL = 'https://authtest.example.com'
}

module.exports = {
  deviceInfo,
  authErrorCode,
  tokenKey,
  htmlTitle,
  baseURL,
  authURL,
}

