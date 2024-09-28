<template>
    <div class="cancel-popup">
      <div class="popup-content">
        <p>Are you sure you want to cancel the test?</p>
        <button @click="$emit('confirmCancel')">Yes, Cancel</button>
        <button @click="$emit('close')">No, Continue</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CancelPopup'
  }
  </script>
  
  <style scoped>
  .cancel-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it appears above other elements */
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 1.2rem;
  }
  
  .popup-content button {
    margin: 5px 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .popup-content button:first-child {
    background-color: #f44336; /* Red color for cancel */
    color: white;
  }
  
  .popup-content button:last-child {
    background-color: #4CAF50; /* Green color for continue */
    color: white;
  }
  </style>
  