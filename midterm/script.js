// Array of background colors
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // Light grey, yellow, green

// Ask the user for their name and color choice
const userName = prompt("How are you doing today?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Store input in an object
const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
};

// Change the background color based on user choice
document.body.style.backgroundColor = userInfo.selectedColor;

// Console check for debugging
console.log("The first color in the array is:", colors[0]); // should output grey HEX
console.log("User Info:", userInfo);
