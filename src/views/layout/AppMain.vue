<template>
<section class="app-main" style="height: 100%">
  <transition name="fade" mode="out-in">
    <router-view :key="key"></router-view>
  </transition>
</section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + Date.now() : this.$route + Date.now()
    }
  }
}
</script>
