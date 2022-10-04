<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="nav"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
// import header from '@/components/header.vue'
// import footer from '@/components/footer.vue'
//
// export default {
//   components:{
//     'header': header,
//     'footer': footer
//   }
//   // name: 'App'
// }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
