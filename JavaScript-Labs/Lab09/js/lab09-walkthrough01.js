
/* Exercise 9.1 - Basic DOM Selection */

// Select element by ID
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Change page title
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Change title directly
document.getElementById("pageTitle").innerHTML =
    "Even newer title";

// Read text content
msg.value = document.getElementById("first").innerText;

// Read an attribute
msg.value = "My class is " + msg.getAttribute("class");

// Select by tag name
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Select all span elements
elem = document.getElementsByTagName("span");

for (var i = 0; i < elem.length; i++) {
    msg.value += "\n" + elem[i].innerText;
}

// Select elements by class name
msg.value = "";

var counts = document.getElementsByClassName("count-number");

for (var i = 0; i < counts.length; i++) {
    msg.value += "\n" + counts[i].innerText;
}

// Select using CSS selector
var ps = document.querySelector("#first p");
msg.value = ps.innerHTML;

// Select all matching paragraphs
ps = document.querySelectorAll("#first p");

for (var i = 0; i < ps.length; i++) {
    msg.value += ps[i].innerHTML + "\n";
}

// Change background color

document.getElementById("features").style.backgroundColor = "green";

// Hide textarea
document.getElementById("msgArea").setAttribute("class", "hidden");

