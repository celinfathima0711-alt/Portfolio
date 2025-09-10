// script.js

// Show welcome message on page load
window.onload = function() {
    alert("Welcome to Celin Fathima's Website!");
};

// Display dynamic greeting based on time
function showGreeting() {
    const greeting = document.getElementById("greeting");
    const now = new Date();
    const hours = now.getHours();

    if(hours < 12) {
        greeting.textContent = "Good Morning! Explore Technology & Machine Learning.";
    } else if(hours < 18) {
        greeting.textContent = "Good Afternoon! Learn something new today!";
    } else {
        greeting.textContent = "Good Evening! Dive into Machine Learning!";
    }
}
