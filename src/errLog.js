/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 10:54:35
 * @modify date 2017-12-14 10:58:18
 * @desc [错误日志]
*/

import Vue from 'vue'
import errLog from '@/store/errLog'

// Vue错误日志
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = (err, vm) => {
    console.log(err, window.location.href)
    errLog.pushLog({
      err,
      url: window.location.href,
      vm
    })
  }
}
