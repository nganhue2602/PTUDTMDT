
/* Exercise 8.8 - JavaScript Functions */

// Global variable
var boxClass = "movingDiv";

// Function with parameter and return value
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
