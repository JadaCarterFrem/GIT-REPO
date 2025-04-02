
// Display a message in the browser console
console.log("Welcome to Bloom by Jada!");

// Show an alert message when the page loads (only once per session)
document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Bloom by Jada!");
        sessionStorage.setItem("alertShown", "true");
    }
 
    // Apply the stored theme preference to ALL pages
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  }
});


// Check localStorage for theme preference and apply it on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
        // If no theme is saved, prompt the user
        const userChoice = prompt("Welcome! Do you want Light mode or Dark mode? (Type 'light' or 'dark')");
        
        if (userChoice === 'dark' || userChoice === 'light') {
            changeTheme(userChoice);
        }
    } else {
        // Apply the saved theme
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
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

    // Save the preference so it applies to all pages
    localStorage.setItem('theme', newTheme);
}
