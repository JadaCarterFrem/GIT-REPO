// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }

    // Check if a theme is already saved
    let savedTheme = localStorage.getItem('theme');

    // Apply saved theme if exists
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }

    // **Force prompt to appear at least once per session**
    if (!sessionStorage.getItem("themePromptShown")) {
        let userChoice = "";

        // Keep asking until they enter 'light' or 'dark'
        while (!["light", "dark"].includes(userChoice)) {
            userChoice = prompt("Welcome! Do you want Light mode or Dark mode? (Type 'light' or 'dark')")?.toLowerCase();
        }

        // Apply & Save theme
        changeTheme(userChoice);
        sessionStorage.setItem("themePromptShown", "true"); // Prevents repeat prompts within a session
    }
});

// Function to toggle between light and dark mode
function changeTheme(theme) {
    if (!theme) return; // Prevent accidental calls with null values

    document.body.classList.toggle('dark-mode', theme === 'dark');

    // Save the preference in localStorage so it applies to all pages
    localStorage.setItem('theme', theme);
}
