
// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

// Show an alert message when the page loads (only once per session)
document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }
});

// Function to toggle between light and dark mode
function changeTheme() {
    // Get the body element
    const body = document.body;

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Optionally, you can store the user's theme preference in localStorage
  