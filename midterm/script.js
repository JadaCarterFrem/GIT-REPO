// Function to toggle between light and dark mode
function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');  // Toggle the class on the body element
    body.classList.toggle('light-mode'); // Switch to the alternate theme
}

// Prompt user for their favorite color
const favoriteColor = prompt("What is your favorite color?");

if (favoriteColor) {
    // Apply the favorite color as the background color if the user provides an input
    document.body.style.backgroundColor = favoriteColor;
}
