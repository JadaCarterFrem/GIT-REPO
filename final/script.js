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

// Display initial welcome message
alert("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    let userName = getCookie("name");
    let newName;

    if (!userName || (userName && userName.trim() === "")) {
        do {
            newName = prompt("What's your name?");
        } while (!newName || (newName && newName.trim() === ""));
        setCookie("name", newName, 7);
        alert(`Welcome, ${newName}!`);
    } else {
        newName = prompt("What's your name?");
        if (newName === userName) {
            alert(`Welcome back, ${userName}!`);
        } else {
            setCookie("name", newName, 7);
            alert(`Welcome, ${newName}!`);
        }
    }

    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage && newName) {
        welcomeMessage.textContent = `Welcome, ${newName}!`;
    }

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme && themes.includes(savedTheme)) {
        applyTheme(savedTheme);
    } else {
        let userChoice = "";
        while (!themes.includes(userChoice)) {
            userChoice = (prompt("Choose your theme: Light, Dark, or Pastel? (Type 'light', 'dark', or 'pastel')") || "").toLowerCase();
        }
        applyTheme(userChoice);
        localStorage.setItem("theme", userChoice);
    }

    let bgColor = localStorage.getItem("bgColor");
    if (!bgColor) {
        bgColor = prompt("Choose a background color (e.g., #ffffff for white):");
        localStorage.setItem("bgColor", bgColor);
    }
    document.body.style.backgroundColor = bgColor;

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
