<template>
  <div class="loading-container">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    :width="width"
    :height="height"
    :style="{ shapeRendering: 'auto', display: 'block', background: 'transparent' }"
  >
    <g>
      <g v-for="(_, index) in 100" :key="index" :transform="`rotate(${3.6 * index} 50 50)`">
        <rect
          :fill="getBarColor(index)"
          height="2"
          width="0.4"
          ry="0"
          rx="0"
          y="13.5"
          x="49.5"
        >
          <animate
            v-if="!testCompleted"
            repeatCount="indefinite"
            :begin="`-${4.166666666666666 - (index * 0.041666666666666664)}s`"
            dur="4.166666666666666s"
            keyTimes="0;1"
            values="1;0.3"
            attributeName="opacity"
          ></animate>
        </rect>
      </g>
    </g>
  </svg>

  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    width: {
      type: [Number, String],
      default: 550
    },
    height: {
      type: [Number, String],
      default: 550
    }
  },
  data(){
    return {
      testCompleted: false // Boolean to track test completion
    };
  },
  methods: {
    getBarColor(index) {
      console.log(index)
      return this.testCompleted ? 'green' : 'white';
    },
    completeTest() {
      this.testCompleted = true;
    }
  },
  mounted() {
    // Simulate test completion after 5 seconds
    // setTimeout(() => {
    //   this.completeTest();
    // }, 5000);
  }

}
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  position: relative;
}

.loading-container p {
  font-size: 18px;
  margin-top: 20px;
}
</style>
