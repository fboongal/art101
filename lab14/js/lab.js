// index.js - Debugging Lab 8
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 5/31/24

// create an array of random numbers
let anArray = [1, 3, 22, 14, 9, 6]
console.log("Here's your array: ", anArray)

// create a named function that adds +3 to anArray
function addNumber(x) {
    return (x+3);
}

let addResults = anArray.map(addNumber)

// create an anonymous function that subtracts -3 to anArray
let minusResults = anArray.map(function(x) {
    return (x-3);
})

$("#output1").append(anArray.join(", "));
$("#output2").append(addResults.join(", "));
$("#output3").append(minusResults.join(", "));

$("#old").append(anArray).append(addResults).append(minusResults);