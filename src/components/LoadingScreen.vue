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
        <g v-for="(_, index) in 100" :key="index" :transform="`rotate(${-3.6 * index} 50 50)`">
          <rect
            :fill="getBarColor()"
            height="2.5"
            width="0.4"
            ry="0"
            rx="0"
            y="13.5"
            x="49.5"
          >
            <animate
              v-if="!testCompleted"
              repeatCount="1"
              :begin="`-${(duration / 100) * index}s`"
              :dur="`${duration}s`"
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
      default: 616
    },
    height: {
      type: [Number, String],
      default: 616
    },
    duration: {
      type: [Number, String],
      default: 20 // Default duration in seconds
    }
  },
  data() {
    return {
      testCompleted: false // Boolean to track test completion
    };
  },
  methods: {
    getBarColor() {
      return this.testCompleted ? 'green' : 'white';
    },
    completeTest() {
      this.testCompleted = true;
    }
  },
  mounted() {
    // Simulate test completion after specified duration
    setTimeout(() => {
      this.completeTest();
    }, this.duration * 1000); // Convert to milliseconds
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
