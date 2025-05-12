// Function to get cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
        const [key, value] = c.split('=');
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Cookie expires in 'days' days
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}

// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }

    // Check if a name is already saved in cookies
    let userName = getCookie("name");

    // If no name is stored, ask the user for their name and save it to cookies
    if (!userName) {
        userName = prompt("What's your name?");
        setCookie("name", userName, 7); // Save the name in cookies for 7 days
    }

    // Display a personalized welcome message
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage && userName) {
        welcomeMessage.textContent = `Welcome back, ${userName}!`;
    }

    // Available themes
    const themes = ["light", "dark", "pastel"];  // Added 'pastel' as a third option

    // Check if a theme is already saved in localStorage
    let savedTheme = localStorage.getItem("theme");

    // Apply saved theme if it exists
    if (savedTheme && themes.includes(savedTheme)) {
        applyTheme(savedTheme);
    }

    // Ensure prompt appears at least once per session
    if (!sessionStorage.getItem("themePromptShown")) {
        let userChoice = "";

        // Keep asking until they enter a valid theme
        while (!themes.includes(userChoice)) {
            userChoice = prompt("Welcome! Do you want Light mode, Dark mode, or Pastel mode? (Type 'light', 'dark', or 'pastel')")?.toLowerCase();
        }

        // Apply & Save theme in localStorage
        applyTheme(userChoice);
        localStorage.setItem("theme", userChoice); // Save theme to localStorage
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

    localStorage.setItem('theme', theme); // Save theme in localStorage
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
