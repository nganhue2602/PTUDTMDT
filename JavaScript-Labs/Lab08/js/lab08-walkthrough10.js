console.log("Lab 8.10 JS loaded");
/* Exercise 8.10 - Creating JavaScript Objects */

// Constructor function
function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;

    // Calculate total price
    this.total = function() {
        return this.price * this.quantity;
    };

    // Display order information
    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
        document.write("</p>");
    };
}

// Create two order objects
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

// Display results
example1.output();
example2.output();
