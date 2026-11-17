
/* Exercise 9.4 - Event Handling */

var btn = document.getElementById("testButton");
var content = document.getElementById("content");
var img = document.getElementById("mainImage");

// Click event - Hide / Show
function simpleHandler(event) {
    if (btn.innerHTML.trim() === "Hide") {
        btn.innerHTML = "Show";
        content.style.display = "none";
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
    }
}

btn.addEventListener("click", simpleHandler);

// Mouseover - gray image
img.addEventListener("mouseover", function() {
    img.style.filter = "grayscale(100%)";
});

// Mouseout - restore image
img.addEventListener("mouseout", function() {
    img.style.filter = "none";
});
