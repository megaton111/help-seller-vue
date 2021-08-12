<template>
  <div id="app">
    <!-- <Header /> -->

    <SideBar />
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    // Header, Footer
    SideBar
  }
}
</script>

<style>
</style>