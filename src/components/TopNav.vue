<template>
    <div class="top-nav">
        <!-- Back to Order Button -->
        <button class="nav-button back-button"><i class="pi pi-angle-left"></i>Back to Orders</button>

        <!-- Search Bar with Icon -->
        <div class="search-container">
            <i class="pi pi-search search-icon"></i>
            <input type="text" class="search-bar" placeholder="Search" />
        </div>

        <!-- Action Buttons (Filter, Rerun, Save as PDF) -->
        <div class="action-buttons">
            <button class="nav-button filter-icon">Filter</button>
            <button class="nav-button">Rerun</button>
            <button class="nav-button export-result">Export Results</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav'
};
</script>

<style scoped>
.top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: #121212;
}

.nav-button {
    padding: 12px 10px;
    background-color: #2f2f2f;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
}


/* Search Container */
.search-container {
    position: relative;
    flex-grow: 1;
    margin: 0 5px;
}

/* Search Icon */
.search-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: #fff;
}

.search-bar {
    width: 100%;
    padding: 10px 12px 10px 30px;
    background-color: rgba(255, 255, 255, 0.15);;
    border: 1px solid rgba(255, 255, 255, 0.15);;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.60);
    font-size: 1rem;
    outline: none;
}

.action-buttons {
    display: flex;
    /* gap: 10px; */
}


.nav-button.back-button i{
    position: relative;
    top: 2px;
    left: -4px;
}

.action-buttons .nav-button{
    margin: 0 3px;
}



.nav-button.export-result{
    background-color: #fff;
    color: #000
}

.filter-icon{
    background-image: url('@/assets/images/filter.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 5px center;
    padding-left: 30px;
}

</style>