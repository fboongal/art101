// index.js - Arrays & Objects
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 4/26/24

// Define Variables
const myTransport = ["legs", " car", " bus"]

// Create an object for my main ride
const myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Silver",
  year: 2008,
  age: function() {
    return 2024 - this.year;
  }
}

// Script Output
document.writeln("Getting around: ", myTransport, "<br>");
document.writeln("My main ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");