<template>
    <div class="test-guide">
        <!-- Heading Section -->
        <h1 class="heading">{{ currentHeading }}</h1>

        <!-- Video Section -->
        <div class="video-section">
            <DiscAnimation v-if="isFourthVideo" class="disc-animation" />
            <video v-if="!isFourthVideo" :src="currentVideo" preload="auto" autoplay muted playsinline
                @ended="onVideoEnded" class="video-player">
                Your browser does not support the video tag.
            </video>
            <video :src="nextVideo" preload="auto" style="display: none"></video>

            <!-- Overlay for 4th video -->
            <div v-if="isFourthVideo" class="overlay">
                <div class="overlay-text">Initializing</div>
            </div>
        </div>

        <!-- Bottom Button Section (Visible in steps 1 and 2 only) -->
        <div class="button-section" v-if="showButtons">
            <button class="cancel-button" @click="handleCancel"><i class="pi pi-times"></i>{{ bottomButtonLeft
                }}</button>
            <button class="action-button" @click="handleAction">{{ bottomButtonRight }}<i
                    class="pi pi-angle-right"></i></button>
        </div>
        <CancelPopup v-if="showConfirmation" @close="closeConfirmation" @confirmCancel="cancelTest" />
    </div>
</template>

<script>

import CancelPopup from '@/components/CancelPopup.vue';
import DiscAnimation from '@/components/DiscAnimation.vue';

export default {
    name: 'TestGuide',
    components: { DiscAnimation, CancelPopup },
    data() {
        return {
            // Step management
            currentStep: 1,
            isFourthVideo: false,
            showConfirmation: false,
            // Video sources
            videoList: [
                { name: 'Video 1', url: '/video/animation_1.mp4' },
                { name: 'Video 2', url: '/video/animation_2.mp4' },
                { name: 'Video 3', url: '/video/animation_3.mp4' },
                { name: 'Video 4', url: '/video/animation_4.mp4' }
            ],
            currentVideo: '/animation_1.mp4', // Start with the first video
            nextVideo: '/animation_2.mp4',
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
        // Change video based on step
        changeVideo(videoIndex) {
            console.log("changeVideo", videoIndex)
            const videoPath = window.electron.getVideoPath(this.videoList[videoIndex].url);
            this.currentVideo = `file://${videoPath}`;

            if (this.videoList[videoIndex + 1] != null) {
                const videoPath1 = window.electron.getVideoPath(this.videoList[videoIndex + 1].url);
                this.nextVideo = `file://${videoPath1}`;
            }

        },

        // Handles the 'Cancel' button action
        handleCancel() {
            this.showConfirmation = true

        },

        cancelTest() {
            if (this.currentStep === 1 || this.currentStep === 2) {
                this.$emit('cancel'); // Emit cancel event for the parent component
            }
        },

        // Handles the 'Open Drawer' or 'Close Drawer' action
        handleAction() {
            if (this.currentStep === 1) {
                this.currentStep++;
                this.changeVideo(1); // Change to Video 2
            } else if (this.currentStep === 2) {
                this.currentStep++;
                this.changeVideo(2); // Automatically switch to Video 3
            }
        },

        onVideoEnded() {
            this.isFourthVideo = false;
            if (this.currentStep === 3 && this.currentVideo.indexOf(this.videoList[2].url) != -1) {
                this.changeVideo(3); // Play video 4
                this.isFourthVideo = true;

                setTimeout(() => {
                    this.$emit('complete');
                }, 100000);
            } else if (this.currentVideo.indexOf(this.videoList[3].url) != -1) {
                this.$emit('complete');
            }
        },

        closeConfirmation() {
            this.showConfirmation = false; // Close the confirmation dialog
        },
    },
    mounted() {
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
    padding: 0 20px;
    box-sizing: border-box;
}

.heading {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 20px;
    color: white;
    /* height: 44px; */
}

.video-section {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    min-height: 400px;
    /* Margin for spacing */
}

.video-player {
    width: 90%;
    height: auto;
    min-height: 400px;
    max-width: 700px;
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
    margin-right: 8px;
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

.action-button i {
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
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.overlay-text {
    color: white;
    font-size: 2.6rem;
    font-weight: bold;
    font-weight: lighter;
}
</style>