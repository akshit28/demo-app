<template>
  <div class="test">
    <!-- Conditionally render TestGuide component -->
    <TestGuide v-if="showTestGuide" @stepCompleted="onGuideComplete" @cancel="cancelTest"
      @complete="onTestGuideComplete" />

    <!-- Show the TestProgress component when a test guide is complete -->
    <TestProgress v-if="showTestProgress" :test-name="selectedTest.name" @cancel="resetTest" />

    <!-- Test grid and navigation -->
    <div class="test-conatiner" v-if="!showTestGuide && !showTestProgress">
      <h1 class="page-heading">Select Test</h1>
      <div class="grid-container">
        <button v-for="test in biochemistryTests" :key="test.id" class="test-button" @click="openTestGuide(test)">
          {{ test.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TestProgress from '@/components/TestProgress.vue';
import TestGuide from '@/components/TestGuide.vue';

export default {
  name: 'TestList',
  components: {
    TestGuide,
    TestProgress
  },
  data() {
    return {
      showTestGuide: false,
      showTestProgress: false,
      selectedTest: null,

      biochemistryTests: [
        { id: 1, name: 'Glucose' },
        { id: 2, name: 'Urea' },
        { id: 3, name: 'Creatinine' },
        { id: 4, name: 'Bilirubin' },
        { id: 5, name: 'Cholesterol' },
        { id: 6, name: 'HDL' },
        { id: 7, name: 'LDL' },
        { id: 8, name: 'Triglycerides' },
        { id: 9, name: 'Calcium' },
        { id: 10, name: 'Phosphate' },
        { id: 11, name: 'Sodium' },
        { id: 12, name: 'Potassium' },
        { id: 13, name: 'Magnesium' },
        { id: 14, name: 'Protein' },
        { id: 15, name: 'Albumin' },
        { id: 16, name: 'Alkaline Phosphatase' }
      ]
    }
  },
  methods: {
    openTestGuide(test) {
      this.selectedTest = test; // Store the selected test ID
      this.showTestGuide = true; // Show TestGuide component
      this.showTestProgress = false;
    },

    startTest(test) {
      this.selectedTest = test; // Store the selected test
    },

    resetTest() {
      this.selectedTest = null; // Reset the selected test (hide TestProgress)
      this.showTestGuide = false;
      this.showTestProgress = false;
    },

    onGuideComplete() {
      // Hide TestGuide and show TestProgress once steps are completed
      this.showTestGuide = false;
      this.showTestProgress = true;
    },
    cancelTest() {
      // Handle test cancellation
      this.showTestGuide = false;
      this.showTestProgress = false;
      this.selectedTest = null;
    },

    onTestGuideComplete() {
      // Hide the TestGuide and show TestProgress
      this.showTestGuide = false;
      this.showTestProgress = true;
    },
  }
}
</script>

<style scoped>
/* Style for the grid layout */
.page-heading {
  color: white;
  margin: 15px 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 4 columns */
  gap: 20px;
  /* Gap between buttons */
  padding: 20px;
  justify-items: center;
  /* Center the buttons horizontally */
}

.test-button {
  width: 100%;
  height: 80px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #2f2f2f;
  border: none;
  color: white;
  text-align: left;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-sizing: border-box;
  padding-left: 10px;
  font-weight: bold;
  /* box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2); */
  font-weight: lighter;
}

.test-button:hover {
  transform: scale(1.04);
}
</style>
