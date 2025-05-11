// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

// Function to get a cookie by name
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
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if name and theme are already saved in cookies
    let userName = getCookie("userName");
    let savedTheme = getCookie("theme");

    if (!userName || !savedTheme) {
        // Prompt for name
        userName = prompt("What's your name?");
        if (userName) {
            setCookie("userName", userName, 7); // Save for a week
        }

        // Prompt for theme preference
        const themes = ["light", "dark"];
        let userChoice = "";

        while (!themes.includes(userChoice)) {
            userChoice = prompt("Do you prefer Light mode or Dark mode? (Type 'light' or 'dark')")?.toLowerCase();
        }

        setCookie("theme", userChoice, 7); // Save for a week
        applyTheme(userChoice);
    } else {
        // Greet the user by name
        alert(`Welcome back, ${userName}!`);
        applyTheme(savedTheme);
    }

    // Attach toggle function to the button
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleTheme);
    }
});

// Function to apply a theme
function applyTheme(theme) {
    if (!theme) return;

    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);

    setCookie("theme", theme, 7); // Save preference
}

// Function to change the theme
function changeTheme(theme) {
    if (!theme) return;

    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);

    setCookie("theme", theme, 7); // Save preference
}

// Function to toggle themes
function toggleTheme() {
    const themes = ["light", "dark", "pastel"];
    let currentTheme = getCookie("theme") || "light";
    let nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    applyTheme(nextTheme);
}
