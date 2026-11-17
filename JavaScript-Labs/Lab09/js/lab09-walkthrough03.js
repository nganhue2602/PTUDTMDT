
/* Exercise 9.3 - Modifying the DOM */

// Create and append a paragraph
var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Remove an existing element
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
