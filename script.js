// Select elements from the DOM
const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Initialize the count
let count = 0;

// Function to update the display with the current count
function updateDisplay() {
    counterDisplay.textContent = count;
}


incrementButton.addEventListener('click', () => {
    count++; 
    updateDisplay();
});


decrementButton.addEventListener('click', () => {
    count--; 
    updateDisplay();
});

// Initialize the display when the page loads
updateDisplay();
