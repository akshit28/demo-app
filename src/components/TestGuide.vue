<template>
    <div class="test-guide">
        <!-- Heading Section -->
        <h1 class="heading">{{ currentHeading }}</h1>

        <!-- Video Section -->
        <div class="video-section">
            <video :src="currentVideo" autoplay muted playsinline @ended="onVideoEnded" class="video-player">
                Your browser does not support the video tag.
            </video>

            <!-- Overlay for 4th video -->
            <div v-if="isFourthVideo" class="overlay">
                <div class="overlay-text">Initializing...</div>
            </div>
        </div>

        <!-- Bottom Button Section (Visible in steps 1 and 2 only) -->
        <div class="button-section" v-if="showButtons">
            <button class="cancel-button" @click="handleCancel"><i class="pi pi-times"></i>{{ bottomButtonLeft }}</button>
            <button class="action-button" @click="handleAction">{{ bottomButtonRight }}<i class="pi pi-angle-right"></i></button>
        </div>
    </div>
</template>

<script>

// import path from 'path-browserify';

export default {
    name: 'TestGuide',
    data() {
        return {
            // Step management
            currentStep: 1,
            isFourthVideo: false,
            // Video sources
            videoList: [
                { name: 'Video 1', url: '/video/animation_1.mp4' },
                { name: 'Video 2', url: '/video/animation_2.mp4' },
                { name: 'Video 3', url: '/video/animation_3.mp4' },
                { name: 'Video 4', url: '/video/animation_4.mp4' }
            ],
            currentVideo: '/animation_1.mp4', // Start with the first video

            // Headings for each step
            headings: [
                'Gather Supplies',
                'Load Supplies',
            ],
            // Bottom buttons for each step (left and right)
            buttons: [
                { left: 'Cancel', right: 'Open Drawer' },
                { left: 'Cancel', right: 'Close Drawer and start test' },
                { left: '', right: '' } // No buttons for step 3
            ]
        }
    },
    computed: {
        currentHeading() {
            return this.headings[this.currentStep - 1]; // Update heading based on current step
        },
        bottomButtonLeft() {
            return this.buttons[this.currentStep - 1].left; // Update left button label
        },
        bottomButtonRight() {
            return this.buttons[this.currentStep - 1].right; // Update right button label
        },
        showButtons() {
            // Show buttons only in steps 1 and 2
            return this.currentStep < 3;
        }
    },
    methods: {

        // getVideoPath(fileName) {
        // // Use `__dirname` to get the correct path
        // return require('path').join(__dirname, 'assets/videos', fileName);
        // },
        // Change video based on step
        changeVideo(videoIndex) {
            console.log("videoIndex", videoIndex);
            const videoPath = window.electron.getVideoPath(this.videoList[videoIndex].url);
            console.log("videoPath *****", videoPath)
            this.currentVideo = `file://${videoPath}`;
        },

        // Handles the 'Cancel' button action
        handleCancel() {
            if (this.currentStep === 1 || this.currentStep === 2) {
                // Perform cancel action (e.g., reset or stop the process)
                alert('Test canceled!');
                this.$emit('cancel'); // Emit cancel event for the parent component
            }
        },

        // Handles the 'Open Drawer' or 'Close Drawer' action
        handleAction() {
            if (this.currentStep === 1) {
                // Open Drawer action
                //   alert('Drawer opened!');
                this.currentStep++;
                this.changeVideo(1); // Change to Video 2
            } else if (this.currentStep === 2) {
                // Close Drawer action
                //   alert('Drawer closed!');
                this.currentStep++;
                this.changeVideo(2); // Automatically switch to Video 3
            } 
        },

        onVideoEnded() {
            console.log("onVideoEnded called", this.currentStep, this.currentVideo, this.videoList[this.currentStep].url)
            this.isFourthVideo = false;
            if (this.currentStep === 3 && this.currentVideo.indexOf(this.videoList[2].url) != -1) {
                this.changeVideo(3); // Play video 4
                this.isFourthVideo = true;
            } else if (this.currentVideo.indexOf(this.videoList[3].url) != -1) {
                // Fourth video ended, navigate to TestProgress
                // this.$router.push({ name: 'TestProgress' });
                this.$emit('complete');
            }
        },

        //   // When a video ends
        //   onVideoEnd() {
        //     // If the current step is 3 (video 3 ends), automatically play video 4
        //     if (this.currentStep === 3 && this.currentVideo === this.videoList[2].url) {
        //       this.changeVideo(3); // Play video 4
        //     }
        //   }
    },
    mounted() {
        // this.changeVideo(0); // Start with Video 1 on mount
        setTimeout(() => {
            this.changeVideo(0); // Start with Video 1 on mount
        }, 0);
    }
}
</script>

<style scoped>
/* Styles for the Test Guide component */
.test-guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100vh;
    box-sizing: border-box;
}

.heading {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
    /* height: 10vh; */
}

.video-section {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    min-height: 400px;
    /* Center vertically */
    margin: 20px 0;
    /* Margin for spacing */
}

.video-player {
    width: 100%;
    height: auto;
    min-height: 400px;
    max-width: 700px;
    /* Max width for video */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.button-section {
    display: flex;
    justify-content: center;
    gap: 10px;
    position: fixed;
    bottom: 20px;
}

.button-section button {
    padding: 15px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
}

.button-section button i {
    margin-right: 8px; /* Add some space between the icon and text */
}

.cancel-button {
    background-color: #2f2f2f;
    color: white;
}

.cancel-button i {
    margin-right: 8px;
    position: relative;
    top: 1px;
}

.action-button {
    background-color: white;
    color: black;
}

.action-button i{
    margin-left: 8px;
    position: relative;
    top: 2px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    z-index: 10; /* Ensure overlay is above other elements */
}

.overlay-text {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    font-weight: lighter;
}
</style>