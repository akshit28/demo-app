<template>
    <div class="test-result-container">
        <!-- Side Navigation Component -->
        <SideNavigation />

        <div class="main-content">
            <!-- Top Navigation Component -->
            <TopNav />

            <!-- Top Result Component -->
            <div class="content-panel">
                <div class="left-panel">
                    <div class="card-row">
                        <div class="card patient-info">
                            <div class="label-value name-label mb20">
                                <label>Review results for</label>
                                <span>{{ patientName }}</span>
                            </div>
                            <div class="label-value mb15">
                                <label>Patient ID</label>
                                <span>{{ patientId }}</span>
                            </div>
                            <div class="label-value mb15">
                                <label>DOB:</label>
                                <span>{{ patientDob }}</span>
                            </div>
                            <div class="label-value mb15">
                                <label>Collection time:</label>
                                <span>{{ sampleCollectionTime }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Second Row: 2 Cards -->
                    <div class="card-row">
                        <div class="card half-width">
                            <div class="test-results-cont">
                                <div class="circle-container">
                                    <div v-for="n in failedTest" :key="n" class="test-circle out-range"></div>
                                </div>
                                <div class="test-count">
                                    <span>{{ failedTest }}</span> out of range
                                </div>
                            </div>
                        </div>
                        <div class="card half-width">
                            <div class="test-results-cont">
                                <div class="circle-container">
                                    <div v-for="n in inValidTest" :key="n" class="test-circle invalid"></div>
                                </div>
                                <div class="test-count">
                                    <span>{{ inValidTest }}</span> invalid
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-row">
                        <div class="card">
                            <div class="test-results-cont">
                                <div class="circle-container">
                                    <div v-for="n in passsedTest" :key="n" class="test-circle valid"></div>
                                </div>
                                <div class="test-count">
                                    <span>{{ passsedTest }}</span> in range
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-panel">
                    <div v-for="(test, index) in tests" :key="index" class="card">
                        <div class="test-row">
                            <div class="test-left">
                                <div class="test-name">{{ test.testName }}</div>
                                <div class="test-type mt2">{{ test.testType }}</div>
                            </div>

                            <!-- Right side: Test Value and Test Value Status -->
                            <div class="test-right">
                                <div class="test-value">{{ test.testValue }}</div>
                                <div class="test-status mt2"
                                    :class="{ 'in-range': test.testValueStatus === 'In range', 'out-range': test.testValueStatus != 'In range' }">
                                    {{ test.testValueStatus }}</div>
                            </div>
                        </div>
                        <div class="bar-container">
                            <div class="left-bar">
                                <div class="idle-val-label">
                                    {{ test.idleValue.split(' ')[0] }}
                                </div>
                            </div>
                            <div class="right-bar"
                                :class="{ 'in-range': test.testValueStatus === 'In range', 'out-range': test.testValueStatus != 'In range' }">
                                <div class="circle">
                                    <span class="circle-text">{{ test.testValue.split(' ')[0] }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
    },
    data() {
        return {
            patientName: "James Dokidis",
            patientId: 40777451,
            patientDob: "1889-11-26",
            sampleCollectionTime: "08:03 PM 12.09.24",
            failedTest: 2,
            passsedTest: 51,
            inValidTest: 3,
            tests: [
                {
                    testName: 'Triglycerides',
                    testType: 'Heart health',
                    testValue: '246 mg/dL',
                    idleValue: '149 mg/dL',
                    testValueStatus: 'Out of range'
                },
                {
                    testName: 'Alanine Aminotransferase (ALT)',
                    testType: 'Risk of liver damage',
                    testValue: '59 IU/L',
                    idleValue: '44 IU/L',
                    testValueStatus: 'Out of range'
                },
                {
                    testName: 'High-Density Cholesterol (HDL)',
                    testType: 'Heart health',
                    testValue: '43 mg/dL',
                    idleValue: '39 mg/dL',
                    testValueStatus: 'In range'
                },
                {
                    testName: 'Thyroid Stimulating Hormone (TSH)',
                    testType: 'Thyroid',
                    testValue: '1.59 uIU/mL',
                    idleValue: '2 iIU/ml',
                    testValueStatus: 'Out of range'
                }
            ]
        }
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


.content-panel {
    display: flex;
    width: 100%;
    overflow: auto;
    height: calc(100vh - 61px);
    gap: 10px;
    padding: 10px 15px;
}

.content-panel::-webkit-scrollbar {
    display: none;
}

.left-panel {
    width: 35%;
    /* padding: 15px; */
}

.right-panel {
    width: 65%;
    /* padding: 15px; */
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
    margin-bottom: 15px;
}

.half-width {
    width: 48%;
    padding-right: 5px;
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
    font-size: 1.4rem;
    font-weight: bold;
}

.test-row {
    display: flex;
    justify-content: space-between;
    color: #e1e1e1
}

.test-left {
    text-align: left;
    font-size: 1rem;
}

.test-right {
    text-align: right;
    font-size: 0.9rem;
}

.test-name {
    font-weight: bold;
}

.test-type {
    color: #8F8F8F;
    font-size: 0.9rem;
}

/* In-range status styling */
.in-range {
    color: #42BE65;
}

/* Out-of-range status styling */
.out-range {
    color: #FA4D56;
}

.bar-container {
    display: flex;
    align-items: center;
    margin: 30px 0 25px;
}

.left-bar,
.right-bar {
    height: 15px;
    width: 50%;
    position: relative;
    border-radius: 3px;
}

.left-bar {
    background-color: #383838;
    position: relative;
}

.right-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.idle-val-label {
    position: absolute;
    right: -8px;
    color: #8F8F8F;
    bottom: -18px;
    font-size: 0.8rem;
}

.in-range.right-bar {
    background-color: #42BE65;
}

.out-range.right-bar {
    background-color: #FA4D56;
}

/* Circle in the right bar */
.circle {
    background-color: white;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    /* Half the circle height to center it vertically */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-text {
    font-size: 0.8rem;
    color: #fff;
    position: absolute;
    top: -18px;
}

.test-results-cont {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
}

.circle-container {
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
    /* Space between circles */
}

.test-circle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.test-circle.valid {
    background-color: #42BE65;
}

.test-circle.invalid {
    background-color: #F1C21B;
}

.test-circle.out-range {
    background-color: #FA4D56
}

.test-count {
    margin-top: 20px;
    color: #E1E1E1;
    font-size: 0.9rem;
}

.test-count span {
    font-weight: bold;
}
</style>
