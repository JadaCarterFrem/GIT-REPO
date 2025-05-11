// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    // Check if name and theme are already saved
    let userName = localStorage.getItem("userName");
    let savedTheme = localStorage.getItem("theme");

    if (!userName || !savedTheme) {
        // Prompt for name
        userName = prompt("What's your name?");
        if (userName) {
            localStorage.setItem("userName", userName);
        }

        // Prompt for theme preference
        const themes = ["light", "dark"];
        let userChoice = "";

        while (!themes.includes(userChoice)) {
            userChoice = prompt("Do you prefer Light mode or Dark mode? (Type 'light' or 'dark')")?.toLowerCase();
        }

        applyTheme(userChoice);
    } else {
        // Greet the user by name
        alert(`Welcome back, ${userName}!`);
        applyTheme(savedTheme);
    }
});

// Function to apply a theme
function applyTheme(theme) {
    if (!theme) return;

    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);

    localStorage.setItem("theme", theme);
}

// Function to change the theme
function changeTheme(theme) {
    if (!theme) return;

    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);

    localStorage.setItem("theme", theme);
}

// Available themes
const themes = ["light", "dark", "pastel"];

// Function to toggle themes in order
function toggleTheme() {
    // Get the current theme from localStorage
    let currentTheme = localStorage.getItem("theme") || "light"; 

    // Find the next theme in the array
    let nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];

    // Apply the next theme
    applyTheme(nextTheme);
}

// Attach toggle function to a button (Make sure the button exists in your HTML)
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
});