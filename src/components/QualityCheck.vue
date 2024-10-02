<template>
    <div class="quality-check-container">
        <!-- Side Navigation Component -->
        <SideNavigation />
        
        <div class="chart-container">
            <div class="card">
                <Scatter :data="data" :options="options" />
            </div>
        </div>
    </div>
</template>

<script>
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'
import * as chartConfig from '@/data/chartConfig.js'
import SideNavigation from '@/components/SideNavigation.vue'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export default {
    name: 'QualityCheck',
    components: {
        SideNavigation,
        Scatter
    },
    
    data() {
        return chartConfig
    }
}
</script>

<style scoped>
.quality-check-container {
    display: flex;
    height: 100vh;
    background-color: #121212;
}

.chart-container {
    flex-grow: 1;
    padding: 15px;
}

.card {
    background-color: #1d1d1d;
    border-radius: 24px;
    padding: 20px;
    margin-bottom: 15px;
    height: 200px;
}
</style>
