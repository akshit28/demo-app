<template>
  <div class="test">
    
    <!-- Show the TestProgress component when a test is selected -->
    <TestProgress 
      v-if="selectedTest" 
      :test-name="selectedTest.name" 
      @cancel="resetTest"
    />
    <div class="test-conatiner">
      <h1>Select Tests</h1>
      <div v-if="!selectedTest" class="grid-container">
      <button 
        v-for="test in biochemistryTests" 
        :key="test.id" 
        class="test-button"
        @click="startTest(test)"
      >
        {{ test.name }}
      </button>
    </div>
    </div>
  </div>
</template>

<script>
import TestProgress from './TestProgress.vue'

export default {
  name: 'TestList',
  components: { TestProgress },
  data() {
    return {
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
    startTest(test) {
      this.selectedTest = test; // Store the selected test
    },

    resetTest() {
      this.selectedTest = null; // Reset the selected test (hide TestProgress)
    }

    // onTestClick(testId) {
    //   alert(`You clicked test ID: ${testId}`);
    // }
  }
}
</script>

<style scoped>
/* Style for the grid layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 10px; /* Gap between buttons */
  padding: 20px;
  justify-items: center; /* Center the buttons horizontally */
}

.test-button {
  width: 150px;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.test-button:hover {
  background-color: #45a049;
}
</style>
