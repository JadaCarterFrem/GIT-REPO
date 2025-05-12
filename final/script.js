

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
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

// Available themes
const themes = ["light", "dark", "pastel"];

document.addEventListener("DOMContentLoaded", function () {
    let userName = getCookie("name");

    if (!userName || (userName && userName.trim() === "")) {
        do {
            userName = prompt("What's your name?");
        } while (!userName || (userName && userName.trim() === ""));
        setCookie("name", userName, 7);
        alert(`Welcome, ${userName}!`);
    } else if (!sessionStorage.getItem("welcomeShown")) {
        alert(`Welcome back, ${userName}!`);
        sessionStorage.setItem("welcomeShown", "true");
    }
    

    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage && userName) {
        welcomeMessage.textContent = `Welcome back, ${userName}!`;
    }

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme && themes.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        if (!sessionStorage.getItem("themePromptShown")) {
            let userChoice = "";
            while (!themes.includes(userChoice)) {
                userChoice = (prompt("Welcome! Light, Dark, or Pastel mode? (Type 'light', 'dark', or 'pastel')") || "").toLowerCase();
            }
            applyTheme(userChoice);
            localStorage.setItem("theme", userChoice);
            sessionStorage.setItem("themePromptShown", "true");
        }
    }

    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme);
    }
});

// Apply theme function
function applyTheme(theme) {
    if (!theme) return;
    document.body.classList.remove("light-mode", "dark-mode", "pastel-mode");
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem("theme", theme);
}

// Toggle theme function
function toggleTheme() {
    let currentTheme = localStorage.getItem("theme") || "light";
    let nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    applyTheme(nextTheme);
}
