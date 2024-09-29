<template>
  <div class="loading-container">
    <img src="@/assets/images/Loading.svg" alt="Loading" />
    <div class="loading-text">
      <span>Booting</span>
      <span>Running self-test</span>
    </div>
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
  height: 100%;
  flex-direction: column;
  position: relative;
}

.loading-text{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loading-text > span{
  color: white;
  display: block

}
.loading-text > span:nth-of-type(1){
  font-size: 4rem;
}
.loading-text > span:nth-of-type(2){
  font-size: 1rem;
}

.loading-container img {
  width: 550px;
  height: 550px;
}

.loading-container p {
  font-size: 18px;
  margin-top: 20px;
}
</style>
