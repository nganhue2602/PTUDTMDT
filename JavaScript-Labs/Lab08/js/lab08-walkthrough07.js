
/* Exercise 8.7 - Arrays */

// Create an array of weekdays
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");

// Add Saturday at the end
daysOfWeek.push("Sat");

// Add Sunday at the beginning
daysOfWeek.unshift("Sun");

// Create calendar table
document.write("<table border='1' cellpadding='10'>");
document.write("<tr>");

// Display weekday headings
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;

    if (daysOfWeek[i].length < 4) {
        day = daysOfWeek[i];
    } else {
        day = "<em>" + daysOfWeek[i] + "</em>";
    }

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

// Display dates from 1 to 30
var date = 1;

for (var row = 0; row < 5; row++) {
    document.write("<tr>");

    for (var col = 0; col < 7; col++) {
        if (date <= 30) {
            document.write("<td>" + date + "</td>");
            date++;
        } else {
            document.write("<td></td>");
        }
    }

    document.write("</tr>");
}

document.write("</table>");
