<template>
    <div class="header">
      <div class="current-time">{{ currentDateTime }}</div>
    </div>
    <div class="test-progress-container">
      <!-- Loading SVG -->
      <div class="loading-section">
        <img src="@/assets/images/Loading.svg" alt="Loading" class="loading-svg" />
        <div class="loading-container">
          <p class="countdown">{{ minutes }}:{{ seconds }}</p>
          <div class="test-name">{{ testName }}</div>
          <button class="cancel-button" @click="cancelClick"><i class="pi pi-times"></i> Cancel test</button>
        </div>
        
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
        currentDateTime: ''
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
      cancelClick() {
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
      },
      updateDateTime() {
            const now = new Date();
            this.currentDateTime = now.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false // Set to false for 24-hour format
            }) // Remove seconds
        }
    },
    mounted() {
      this.startTimer(); // Start the countdown timer when the component is mounted
      this.updateDateTime(); // Call once on mount
      setInterval(this.updateDateTime, 1000); // Update every second
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
    color: white
  }

  .current-time{
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: .8rem;
  }
  .test-name{
    margin: 10px 0;
    color: white;
    font-size: 1.4rem;
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

  
  /* Loading SVG and Countdown Styling */
  .loading-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-top: 40px;
  }
  
  .loading-svg {
    width: 550px;
    height: 550px;
  }

  .loading-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .countdown {
    color: white;
    font-size: 4rem;
    margin: 0 0 10px;
  }

   /* Cancel Button Styling */
   .cancel-button {
    padding: 10px 12px;
    font-size: 0.9rem;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    background-color: #2f2f2f;
    color: #fff;
  }

  .cancel-button i {
      margin-right: 1px;
      position: relative;
      top: 1px;
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
  