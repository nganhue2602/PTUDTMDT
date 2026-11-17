
/* Exercise 9.4 - Event Handling */

var btn = document.getElementById("testButton");
var content = document.getElementById("content");
var img = document.getElementById("mainImage");

// Hide / Show
btn.addEventListener("click", function() {
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.textContent = "Hide";
    } else {
        content.style.display = "none";
        btn.textContent = "Show";
    }
});

// Mouseover
img.addEventListener("mouseover", function() {
    img.style.filter = "grayscale(100%)";
});

// Mouseout
img.addEventListener("mouseout", function() {
    img.style.filter = "none";
});
