
/* Exercise 10.3 - Advanced Selectors */

$(function() {

    // Select all password fields
  //  $(':password').css('background-color', 'yellow');

    // Select every fourth child of the form
 $('form :nth-child(4n)').css('background-color', 'yellow');

    // Select labels containing "word"
  //  $('label:contains("word")').css('color', 'black');

});
