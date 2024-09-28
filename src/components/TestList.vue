<template>
  <div class="test">
    
    <!-- Show the TestProgress component when a test is selected -->
    <TestProgress 
      v-if="selectedTest" 
      :test-name="selectedTest.name" 
      @cancel="resetTest"
    />
    <div class="test-conatiner" v-if="!selectedTest">
      <h1>Select Test</h1>
      <div class="grid-container">
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

  }
}
</script>

<style scoped>
/* Style for the grid layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 15px; /* Gap between buttons */
  padding: 20px;
  justify-items: center; /* Center the buttons horizontally */
}

.test-button {
  width: 100%;
  height: 100px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #efefef;
  border: none;
  border-left: 5px #007BFF solid;
  color: black;
  text-align: left;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.6s ease;
  box-sizing: border-box;
  padding-left: 10px;
  font-weight: bold;
  box-shadow: 1px 2px 5px 2px rgba(0,0,0,0.2);
}

.test-button:hover {
  transform: scale(1.04); /* Increase size by 10% on hover */
  background-color: white;
}
</style>
