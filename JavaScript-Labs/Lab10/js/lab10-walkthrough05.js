
$(function () {
    // Create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg">');

    // Insert image after the panel
    var panel = $('.panel');
    panel.after(img);
});
