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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'LibreFranklin', Helvetica, Arial, sans-serif; */
}

@font-face {
  font-family: 'Libre Franklin';
  src: url('@/assets/fonts/LibreFranklin-VariableFont_wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background: black;
  font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
  font-size: 16px;
}

#app-container {
  font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-optical-sizing: auto;
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
  color: #e1e1e1;
  display: block
}

.loading-text>span:nth-of-type(1) {
  font-size: 4rem;
}

.loading-text>span:nth-of-type(2) {
  font-size: 1rem;
}

.mt5{
  margin-top: 5px;
}

.mb10{
  margin-bottom: 10px;
}

.mb15{
  margin-bottom: 15px;
}

.mb20{
  margin-bottom: 20px;
}

</style>
