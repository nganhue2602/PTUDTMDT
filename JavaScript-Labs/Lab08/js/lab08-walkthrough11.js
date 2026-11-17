// define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// create an array of country objects
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257),
];

// you can also push each new country object onto the end of the array
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));



/* Exercise 8.11 - Arrays of Objects */

document.write("<h1>Arrays of Objects</h1>");

document.write("<table border='1' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Country</th>");
document.write("<th>ISO</th>");
document.write("<th>Capital</th>");
document.write("<th>Population</th>");
document.write("</tr>");

for (var i = 0; i < countries.length; i++) {
    document.write("<tr>");
    document.write("<td>" + countries[i].name + "</td>");
    document.write("<td>" + countries[i].iso + "</td>");
    document.write("<td>" + countries[i].capital + "</td>");
    document.write("<td>" + countries[i].population + "</td>");
    document.write("</tr>");
}

document.write("</table>");
