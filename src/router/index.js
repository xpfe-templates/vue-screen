/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-06 03:44:28
 * @modify date 2017-06-06 03:44:28
 * @desc [路由方法]
*/

import Vue from 'vue'
import Router from 'vue-router'
let env = 'development'
if (process.env.NODE_ENV !== 'development') {
  env = 'production'
}
const _import = require('./_import_' + env)

Vue.use(Router)

export const routerMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  { path: '/401', component: _import('error/401'), hidden: true },
  {
    path: '/',
    component: _import('main/index'),
  },
]

export default new Router({
  // mode: 'history', // 需要nginx支持，如果不需要暴露URL的，例如大屏，可以改为hash
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
