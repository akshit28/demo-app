<template>
  <div class="test-progress-section">
    <div class="header">
      <div class="current-time">{{ currentDateTime }}</div>
    </div>
    <div class="test-progress-container">
      <LoadingScreen ref="loadingScreenRef" />
      <div class="test-info-container">
        <div class="test-progress" v-if="!testCompleted">
          <video :src="currentVideo" preload="auto" autoplay muted playsinline class="logo-animation" />
          <h3 class="countdown">{{ minutes }}:{{ seconds }}</h3>
          <div class="message mt5">Running analysis</div>
          <div class="patient-details mt5 mb20">Sharma<span>&#183;</span>MRN<span>&#183;</span>11/26</div>
          <button class="button cancel" @click="cancelClick"><i class="pi pi-times"></i> Cancel test</button>
        </div>
        <div class="test-completed" v-else>
          <i class="pi pi-check mb15"></i>
          <h3 class="mb10">Test complete</h3>
          <div class="message mt5">Analysis Complete</div>
          <div class="patient-details mt5 mb20">Sharma<span>&#183;</span>MRN<span>&#183;</span>11/26</div>
          <button class="button confirm" @click="showReport">Show test results</button>
        </div>
      </div>

      <CancelPopup v-if="showConfirmation" @close="closeConfirmation" @confirmCancel="cancelTest" />
    </div>
  </div>
</template>

<script>
import CancelPopup from '@/components/CancelPopup.vue';
import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  name: 'TestProgress',
  components: { CancelPopup, LoadingScreen },
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
      currentDateTime: '',
      testCompleted: false,
      currentVideo: window.electron.getVideoPath("/video/logo-animation.mp4")
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
    },
    completeTest() {
      clearInterval(this.timer);
      this.testCompleted = true
      this.$refs.loadingScreenRef.completeTest();
    },
    showReport() {
      this.$router.push('/testresult')
    },

    updateDateTime() {
      const now = new Date();
      this.currentDateTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  },
  mounted() {
    this.startTimer(); // Start the countdown timer when the component is mounted
    this.updateDateTime(); // Call once on mount
    setInterval(this.updateDateTime, 1000); // Update every second

    setTimeout(() => {
      this.completeTest();
    }, 5000);
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer); // Clean up the timer when the component is destroyed
    }
  }
}
</script>

<style scoped>
.test-progress-section {
  background-color: #121212;
}

.header {
  position: relative;
  color: white
}

.current-time {
  position: absolute;
  right: 4px;
  top: 0;
  font-size: .8rem;
}

.test-name {
  margin: 10px 0;
  color: white;
  font-size: 1.4rem;
}

.test-progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.test-info-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.countdown {
  color: white;
  font-size: 4rem;
  font-weight: 400;
}

/* Cancel Button Styling */
button {
  padding: 12px 14px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  border: none;

}

.button.cancel {
  background-color: #2f2f2f;
  color: #fff;
}

.button.cancel i {
  margin-right: 1px;
  position: relative;
  top: 1px;

}

.button.confirm {
  background-color: #fff;
}

.test-progress,
.test-completed {
  color: #fff;
}

.message,
.patient-details {
  font-size: 1.2rem;
}

.patient-details span {
  display: inline-block;
  padding: 0 5px;
  font-weight: bold;
}

.logo-animation {
  height: 55px;
  margin-top: -15px;
}

.test-completed h3 {
  color: #fff;
  font-size: 2rem;
}

.test-completed i{
  font-size: 2rem;
  margin-top: -25px;
}


</style>