<script>
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

// Available themes (defined only once)
const themes = ["light", "dark", "pastel"];

document.addEventListener("DOMContentLoaded", function () {
    // Check if a name is already saved in cookies
    let userName = getCookie("name");

    // If no name is stored, prompt the user and validate input
    if (!userName || userName.trim() === "") {
        do {
            userName = prompt("What's your name?");
        } while (!userName || userName.trim() === "");
        
        setCookie("name", userName, 7); // Save the name in cookies for 7 days
        alert(`Welcome, ${userName}!`);
    } else {
        // Greet the returning user
        alert(`Welcome back, ${userName}!`);
    }

    // Display a personalized welcome message
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage && userName) {
        welcomeMessage.textContent = `Welcome back, ${userName}!`;
    }

    // Check if a theme is already saved in localStorage
    let savedTheme = localStorage.getItem("theme");

    // Apply saved theme if it exists and is valid
    if (savedTheme && themes.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        // Ensure prompt appears at least once per session for theme selection
        if (!sessionStorage.getItem("themePromptShown")) {
            let userChoice = "";
            while (!themes.includes(userChoice)) {
                userChoice = prompt("Welcome! Do you want Light mode, Dark mode, or Pastel mode? (Type 'light', 'dark', or 'pastel')")?.toLowerCase();
            }
            applyTheme(userChoice);
            localStorage.setItem("theme", userChoice); // Save theme to localStorage
            sessionStorage.setItem("themePromptShown", "true"); // Prevent repeat prompts within a session
        }
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

    localStorage.setItem("theme", theme); // Save theme in localStorage
}

// Function to toggle themes in order
function toggleTheme() {
    // Get the current theme from localStorage
    let currentTheme = localStorage.getItem("theme") || "light";

    // Find the next theme in the array
    let nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];

    // Apply the next theme
    applyTheme(nextTheme);
}

// Attach toggle function to a button if it exists
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme);
    }
});
</script>
