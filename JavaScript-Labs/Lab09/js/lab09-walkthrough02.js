
/* Exercise 9.2 - DOM Family Relations */

// Select parent element
var parent = document.getElementById("first");

// Get all child nodes
var children = parent.childNodes;

// Loop through child nodes
for (var i = 0; i < children.length; i++) {
    var node = children[i];

    console.log("Child " + i +
        " - Node Type: " + node.nodeType);

    // Change background of element nodes
    if (node.nodeType === 1) {
        node.style.backgroundColor = "lightblue";
    }
}
