// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    // Check if the name is already saved in localStorage
    let userName = localStorage.getItem("userName");

    // If the name is not saved, ask for it
    if (!userName) {
        userName = prompt("Welcome to Bloom by Jada! What's your name?");
        if (userName) {
            localStorage.setItem("userName", userName);
        }
    }

    // Display a personalized greeting
    if (userName) {
        alert(`Welcome back, ${userName}!`);
    }

    // Available themes
    const themes = ["light", "dark", "pastel"];  // Added 'pastel' as a third option

    // Check if a theme is already saved
    let savedTheme = localStorage.getItem("theme");

    // Apply saved theme if it exists
    if (savedTheme && themes.includes(savedTheme)) {
        applyTheme(savedTheme);
    }

    // Ensure prompt appears at least once per session for theme
    if (!sessionStorage.getItem("themePromptShown")) {
        let userChoice = "";

        // Keep asking until they enter a valid theme
        while (!themes.includes(userChoice)) {
            userChoice = prompt("Do you prefer Light mode, Dark mode, or Pastel mode? (Type 'light', 'dark', or 'pastel')")?.toLowerCase();
        }

        // Apply & Save theme
        applyTheme(userChoice);
        sessionStorage.setItem("themePromptShown", "true"); // Prevents repeat prompts within a session
    }
});

// Function to apply a theme
function applyTheme(theme) {
    if (!theme) return;

    // Remove all theme classes first
    document.body.classList.remove("light-mode", "dark-mode", "pastel-mode");

    // Add the selected theme
    document.body.classList.add(`${theme}-mode`);

    // Save the preference in localStorage
    localStorage.setItem("theme", theme);
}

function changeTheme(theme) {
    if (!theme) return; 

    document.body.classList.remove("light-mode", "dark-mode", "pastel-mode"); 
    document.body.classList.add(`${theme}-mode`);  

    localStorage.setItem('theme', theme);
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
