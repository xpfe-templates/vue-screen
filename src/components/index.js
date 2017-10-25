/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-06 07:46:07
 * @modify date 2017-08-03 07:12:20
 * @desc [全局组件文件]
*/

import Vue from 'vue'

// vue-echarts插件
import VueEcharts from 'vue-echarts'
Vue.component('chart', VueEcharts)

const components = []
components.forEach((component) => {
  Vue.component(component.name, component)
})
