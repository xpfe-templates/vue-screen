/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-10-16 11:16:57
 * @modify date 2017-10-16 11:16:57
 * @desc [配置信息]
*/

// const env = process.env.NODE_ENV
const isProd = process.env.NODE_ENV === 'production'

const baseURL = isProd ? 'http://api.example.com' : 'https://boss.startdtapi.com'
const htmlTitle = isProd ? 'Vue Screen' : 'Vue Screen - dev'

module.exports = {
  baseURL,
  htmlTitle,
}
