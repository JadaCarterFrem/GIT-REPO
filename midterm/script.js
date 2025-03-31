// Function to show a popup asking the user how they are
function askHowAreYou() {
    const userResponse = prompt("How are you?");
    if (userResponse) {
        alert("Sending good vibes!");
    }
}

// Call the function when the page loads
askHowAreYou();

// Function to toggle between light and dark mode
function changeTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-button');
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    
    // Change the button text based on the theme
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Toggle Light Mode";
    } else {
        but