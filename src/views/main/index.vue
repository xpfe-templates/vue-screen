<template>
<div class="dashboard">
  <p style="color: #fff;font-size:48px;">我是首页</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters(['info']),
  },
}
</script>


<style lang="scss">
.dashboard {
  height: 100%;
}
</style>
