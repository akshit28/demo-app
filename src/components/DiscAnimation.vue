<template>
    <div :class="['container']">
        <div v-for="(disc, index) in discs" :key="index" :class="['disc', 'disc' + (index + 1)]"></div>
    </div>
</template>

<script>
export default {
    name: 'DiscAnimation',
    data() {
        return {
            discs: [1, 2, 3],
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
    height: 800px;
    perspective: 1000px;
    transform: rotateX(65deg);
    position: absolute;
    top: 0;
    transition: transform 2s ease-in-out;
}

.disc {
    width: 0;
    height: 0;
    border-radius: 50%;
    /* animation: rotate 0.3s linear infinite; */
    animation: expand 3s cubic-bezier(0.25, 1, 0.5, 1) forwards, rotate 0.2s linear infinite;
    /* Use expand animation */
    transform-style: preserve-3d;
    position: relative;
    background: linear-gradient(145deg, #f0f0f0, #d4d4d4);
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

</style>