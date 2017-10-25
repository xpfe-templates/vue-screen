/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-10-16 11:16:57
 * @modify date 2017-10-16 11:16:57
 * @desc [配置信息]
*/

const env = process.env.NODE_ENV

let htmlTitle = 'Vue Screen - dev'
let baseURL = 'https://www.easy-mock.com/mock/59eff97c7af0b52dd53c60ae/screen'
let authURL = 'https://www.easy-mock.com/mock/59f02babb120c445fab92be2/account'

if (env === 'production') {
  htmlTitle = 'Vue Screen'
  baseURL = 'https://www.easy-mock.com/mock/59eff97c7af0b52dd53c60ae/screen'
  authURL = 'https://www.easy-mock.com/mock/59f02babb120c445fab92be2/account'
} else if (env === 'testing') {
  htmlTitle = 'Vue Screen - test'
  baseURL = 'https://www.easy-mock.com/mock/59eff97c7af0b52dd53c60ae/screen'
  authURL = 'https://www.easy-mock.com/mock/59f02babb120c445fab92be2/account'
}

module.exports = {
  htmlTitle,
  baseURL,
  authURL,
}
