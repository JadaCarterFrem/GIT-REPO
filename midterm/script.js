// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }

    // Available themes
    const themes = ["light", "dark", "pastel"];  // Added 'pastel' as a third option

    // Check if a theme is already saved
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
