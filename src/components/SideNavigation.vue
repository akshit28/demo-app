<template>
    <div class="side-navigation">
        <!-- Top icons -->
        <div class="top-icons">
            <div class="time-display">
                {{ formattedTime }}
            </div>
            <div class="icon" v-for="(icon, index) in topIcons" :key="index"
                :style="{ backgroundColor: icon.backgroundColor }">
                <img :src="icon.src" alt="icon" />
            </div>
        </div>


        <div class="bottom-hldr">
            <div class="bottom-icon" :style="{ backgroundColor: bottomIcon.backgroundColor }">
                <img :src="bottomIcon.src" alt="icon" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: new Date(),
            topIcons: [
                {
                    src: require('@/assets/images/lab_profile.svg'),
                    backgroundColor: '#C9E6E3'
                },
                {
                    src: require('@/assets/images/labs.svg'),
                    backgroundColor: '#FFB598'
                },
                {
                    src: require('@/assets/images/settings.svg'),
                    backgroundColor: '#FFB0CD'
                }
            ],
            bottomIcon: {
                src: require('@/assets/images/home.svg'),
                backgroundColor: '#C7C6C5'
            }
        };
    },
    computed: {
        formattedTime() {
            return this.currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        }
    },
    mounted() {
        // Update the time every minute
        setInterval(() => {
            this.currentTime = new Date();
        }, 60000); // 60000 ms = 1 minute
    }
};
</script>

<style scoped>
.side-navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80px;
    height: 100vh;
    background-color: #121212;
    padding: 10px;
    border-right: rgba(255, 255, 255, 0.10) solid 1px;
}

.top-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bottom-hldr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.icon,
.bottom-icon {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-bottom: 10px;
}

.bottom-icon{
    margin-bottom: 5px;
}

.icon img,
.bottom-icon img {
    width: 30px;
    height: 30px;
}

.bottom-icon span {
    font-size: 1.2rem;
    font-weight: bold;
}

.time-display {
    color: #fff;
    font-size: 0.7rem;
    text-transform: uppercase;
    margin-bottom: 10px;
}
</style>