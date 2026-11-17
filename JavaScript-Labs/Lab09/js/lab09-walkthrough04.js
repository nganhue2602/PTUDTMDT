
/* Exercise 9.4 - Simple Event Handling */

// Button click event
var btn = document.getElementById("testButton");

function simpleHandler(event) {
    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";

        setTimeout(function() {
            content.style.display = "none";
        }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}

btn.addEventListener("click", simpleHandler);

// Mouseover and mouseout events
var img = document.getElementById("mainImage");

img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});
