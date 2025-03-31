// Function to show a popup asking the user how they are
function askHowAreYou() {
    const userResponse = prompt("How are you?");
    if (userResponse) {
        alert("Sending good vibes!");
    }
}

// Call the function when the page loads
askHowAreYou();
