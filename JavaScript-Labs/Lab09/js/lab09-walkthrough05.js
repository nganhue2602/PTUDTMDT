
function outputBox(num) {
    return "<div id='div" + num +
           "' style='display:inline-block; border:1px solid black; padding:15px; margin:5px;'>" +
           "This is div " + num + "</div>";
}

window.addEventListener("load", function() {
    var divToGet = document.getElementById("div1");
    if (divToGet) {
        alert(divToGet.innerHTML);
    }
});
