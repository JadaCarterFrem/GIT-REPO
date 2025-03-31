
// Display a message in the browser console
console.log("CSS + JavaScript is powerful!");

// Show an alert message when the page loads (only once per session)
document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }
});

// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}


// Function to toggle between light and dark mode
function changeTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-button');
