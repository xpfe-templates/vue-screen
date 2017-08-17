<template>
  <div class="app-wrap u-clearfix">
    <app-main></app-main>
  </div>
</template>

<script>
// 注意：是否需要sidebar和navbar根据实际需要选择
import { AppMain } from 'views/layout'
// import { Sidebar, NavBar, AppMain } from 'views/layout'

export default {
  name: 'Layout',
  components: { AppMain }
}
</script>

<style lang="scss" scoped>
.app-wrap {
  position: relative;
  height: 100%;
  width: 100%;
  // .sidebar-wrap {
  //   width: 180px;
  //   height: 100%;
  //   position: fixed;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   z-index: 1001;
  // }
  // .main-wrap {
  //   min-height: 100%;
  //   margin-left: 180px;
  // }
}
</style>
