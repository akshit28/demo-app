<template>
    <div class="header">
        <h1 class="test-name">{{ testName }}</h1>
        <!-- Cancel Button -->
        <button class="cancel-button" @click="confirmCancel">Cancel test</button>
    </div>
    <div class="test-progress-container">
      <!-- Loading SVG -->
      <div class="loading-section">
        <img src="@/assets/Loading.svg" alt="Loading" class="loading-svg" />
        <p class="countdown">{{ minutes }}:{{ seconds }}</p>
      </div>
  
      <CancelPopup v-if="showConfirmation" @close="closeConfirmation" @confirmCancel="cancelTest" />
    </div>
  </template>
  
  <script>
  import CancelPopup from '@/components/CancelPopup.vue';

  export default {
    name: 'TestProgress',
    components: { CancelPopup },
    props: {
        testName: {
        type: String,
        required: true
        }
    },
    data() {
      return {
        timeRemaining: 600, // 10 minutes in seconds
        timer: null,
        showConfirmation: false, // To show/hide the confirmation dialog
      }
    },
    computed: {
      minutes() {
        return Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
      },
      seconds() {
        return (this.timeRemaining % 60).toString().padStart(2, '0');
      }
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          if (this.timeRemaining > 0) {
            this.timeRemaining--;
          } else {
            clearInterval(this.timer);
          }
        }, 1000);
      },
      confirmCancel() {
        this.showConfirmation = true; // Show the confirmation dialog
      },
      closeConfirmation() {
        this.showConfirmation = false; // Close the confirmation dialog
      },
      cancelTest() {
        clearInterval(this.timer);
        this.showConfirmation = false;
        this.$emit('cancel');
        // alert('Test has been canceled');
        // Handle any other test cancellation logic here
      }
    },
    mounted() {
      this.startTimer(); // Start the countdown timer when the component is mounted
    },
    beforeUnmount() {
      if (this.timer) {
        clearInterval(this.timer); // Clean up the timer when the component is destroyed
      }
    }
  }
  </script>
  
  <style scoped>
  .header{
    position: relative;
  }

  /* Container Styling */
  .test-progress-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    position: relative;
    flex-direction: column;
  }
  
  /* Cancel Button Styling */
  .cancel-button {
    position: absolute;
    top: 0px;
    right: 0px;
    border: red solid 1px;
    background-color: white;
    color: black;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease, border 0.3s ease;
  }
  
  .cancel-button:hover {
    /* background-color: darkred; */
    border: red solid 2px;
    transform: scale(1.04)
  }
  
  /* Loading SVG and Countdown Styling */
  .loading-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  
  .loading-svg {
    width: 400px;
    height: 400px;
    margin-bottom: 20px;
  }
  
  .countdown {
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  
  /* Confirmation Dialog Styling */
  .confirmation-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .confirmation-dialog p {
    margin-bottom: 15px;
  }
  
  .confirmation-dialog button {
    margin: 5px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
  }
  
  .confirmation-dialog button:first-child {
    background-color: red;
  }
  
  .confirmation-dialog button:first-child:hover {
    background-color: darkred;
  }
  </style>
  