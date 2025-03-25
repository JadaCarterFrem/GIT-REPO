
document.addEventListener("DOMContentLoaded", function () {
    console.log("CSS + JavaScript is powerful!");

    if (!sessionStorage.getItem("alertShown")) {
        alert("Welcome to Assignment 5 with JavaScript!");
        sessionStorage.setItem("alertShown", "true");
    }
});

function changeTheme() {
    document.body.classList.toggle("dark-mode");
}
