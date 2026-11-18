
/* Exercise 10.2 - Basic jQuery Selectors */

$(function() {

    // Select textarea and change its value
    var msg = $('#msgArea');
    msg.val("here is some new text");

    // Change HTML content
    $('#first').html("new Title");

    // Read an attribute
    $('#msgArea').val(
        "My class is " + $('#msgArea').attr("class")
    );

    // Change button colors
    var buttons = $('button');
    buttons.css('background-color', 'red');

    // Change page background
    var temp = $('body');
    temp.css('background-color', 'ivory');

    // Add CSS class
    $('.center-icons').addClass('selected');

});
