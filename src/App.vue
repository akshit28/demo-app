<template>
  <div id="app-container">
    <div v-if="isLoading" class="boot-container">
      <LoadingScreen />
      <div class="loading-text">
      <span>Booting</span>
      <span>Running self-test</span>
    </div>
    </div>
    
    <router-view v-else />
  </div>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue'

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
  mounted() {
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
  padding:0;
  margin:0;
}

#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.boot-container {
  position: relative;
}

.loading-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.loading-text>span {
  color: white;
  display: block
}

.loading-text>span:nth-of-type(1) {
  font-size: 4rem;
}

.loading-text>span:nth-of-type(2) {
  font-size: 1rem;
}
</style>
