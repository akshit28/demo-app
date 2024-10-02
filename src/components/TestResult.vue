<template>
    <div class="test-result-container">
        <!-- Side Navigation Component -->
        <SideNavigation />

        <div class="main-content">
            <TopNav />
            <div class="content-panel">
                <div class="left-panel">
                    <div class="card-row">
                        <div class="card patient-info">
                                <div class="label-value name-label mb15">
                                    <label>Review results for</label>
                                    <span>James Dokidis</span>
                                </div>
                                <div class="label-value mb10">
                                    <label>Patient ID</label>
                                    <span>40777451</span>
                                </div>
                                <div class="label-value mb10">
                                    <label>DOB:</label>
                                    <span>1889-11-26</span>
                                </div>
                                <div class="label-value mb10">
                                    <label>Collection time:</label>
                                    <span>08:03 PM 12.09.24</span>
                                </div>
                        </div>
                    </div>

                    <!-- Second Row: 2 Cards -->
                    <div class="card-row">
                        <div class="card half-width">
                            
                        </div>
                        <div class="card half-width">
                            
                        </div>
                    </div>

                    <div class="card-row">
                        <div class="card">
                            
                        </div>
                    </div>
                </div>
                <div class="right-panel">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue';
import TopNav from '@/components/TopNav.vue';

export default {
    components: {
        SideNavigation,
        TopNav
    }
};
</script>

<style scoped>
.test-result-container {
    display: flex;
    height: 100vh;
    background-color: #121212;
}

.main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
}


.content-panels {
    display: flex;
    width: 100%;
    padding: 20px;
}

.left-panel {
    width: 40%;
    padding: 15px;
}

.right-panel {
    width: 60%;
    padding: 15px;
}

.card-row {
    display: flex;
    gap: 10px;
}

.card {
    flex: 1;
    background-color: #1d1d1d;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 10px;
}

.half-width {
    width: 48%;
}


.label-value {
    text-align: left;
}

.label-value:last-of-type() {
    margin-bottom: 0px;
}

.label-value label {
    color: #8F8F8F;
    display: block;
    font-size: 0.9rem;
}

.label-value span {
    display: block;
    color: #E1E1E1;
    font-size: 1rem;
}

.name-label label {
    font-size: 0.8rem;
}

.name-label span {
    font-size: 1.6rem;
    font-weight: bold;
}
</style>