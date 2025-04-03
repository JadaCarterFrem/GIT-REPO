// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Apply the stored theme to ALL pages
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }

    // Ensure the user is prompted for a theme at least once per session
    if (!sessionStorage.getItem("themePromptShown")) {
        let userChoice;
        while (!userChoice || (userChoice !== "light" && userChoice !== "dark")) {
            userChoice = prompt("Welcome! Do you want Light mode or Dark mode? (Type 'light' or 'dark')")?.toLowerCase();
        }
        
        changeTheme(userChoice);
        sessionStorage.setItem("themePromptShown", "true"); // Prevents multiple prompts per session
    }
});

// Function to toggle between light and dark mode
function changeTheme(theme = null) {
    const body = document.body;
    let newTheme;

    if (theme) {
        // Apply the selected theme
        body.classList.toggle('dark-mode', theme === 'dark');
        newTheme = theme;
    } else {
        // Toggle the theme
        body.classList.toggle('dark-mode');
        newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    }

    // Save the preference in localStorage so it applies to all pages
    localStorage.setItem('theme', newTheme);
}
