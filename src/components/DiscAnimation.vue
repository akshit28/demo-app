<template>
    <div :class="['container']">
        <div class="disc disc1"></div>
        <div class="disc disc2"></div>
        <div class="disc disc3"></div>
    </div>
</template>

<script>
export default {
    name: 'DiscAnimation',
    data() {
        return {
            sideView: false, // Toggle for the view change
        };
    },
    mounted() {
        // Automatically trigger the side view after 1 second
        setTimeout(() => {
            this.sideView = true;
        }, 2000);
    }
};
</script>


<style scoped>

/* Container to hold the discs and allow perspective */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    perspective: 700px;
    /* transition: transform 1s ease; */
    transform: rotateX(65deg);
    position: absolute;
    top: 0;
}

.disc {
    width: 0;
    height: 0;
    border-radius: 50%;
    /* animation: rotate 0.3s linear infinite; */
    animation: expand 0.9s forwards, rotate 0.2s linear infinite;
    /* Use expand animation */
    transform-style: preserve-3d;
    position: relative;
    background: linear-gradient(145deg, #f0f0f0, #d4d4d4);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.1);
    transform: rotateX(45deg);
    background-image: url('@/assets/images/disc.png');
    background-repeat: no-repeat;
    background-size: 275px;
    background-position: center;
}

@keyframes expand {
    0% {
        width: 0;
        height: 0;
    }

    100% {
        width: 200px;
        height: 200px;
    }
}


/* Keyframes to rotate the discs */
@keyframes rotate {
    to {
        transform: rotateX(45deg) rotateZ(-360deg);
    }
}

/* Angle transition: Top view to side view */
.container.side-view {
    transform: rotateX(65deg);
}
</style>