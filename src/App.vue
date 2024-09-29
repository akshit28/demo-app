<template>
  <div id="app">
    <LoadingScreen v-if="isLoading" />
    <router-view v-else />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'  

export default {
  name: 'App',
  components: {
    LoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoading = false
      this.$router.push('/test')
    }, 2000)
  }
}
</script>

<style>
body {
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
