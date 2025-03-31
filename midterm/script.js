// Function to show a popup asking the user for their favorite color
function askFavoriteColor() {
    const favoriteColor = prompt("What is your favorite color?");
    if (favoriteColor) {
        alert(`Your favorite color is ${favoriteColor}!`);
    }
}

// Call the function when the page loads
askFavoriteColor();
