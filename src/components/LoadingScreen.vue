<template>
  <div class="loading-container">
    <img src="@/assets/Loading.svg" alt="Loading" />
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.loading-container img {
  width: 300px;
  height: 300px;
}

.loading-container p {
  font-size: 18px;
  margin-top: 20px;
}
</style>
