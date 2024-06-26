// index.js - Anonymous Functions & Callbacks
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 5/3/24

// create an array of random numbers
var anArray = [1, 3, 22, 14, 9, 6]
console.log("Here's your array: ", anArray)

// create a named function that adds +3 to anArray
function addNumber(x) {
    return (x+3);
}

var addResults = anArray.map(addNumber)
// should return [4, 6, 25, 17, 12, 9]
console.log("Here's the output of your named function adding +3 to your array: ", addResults)

// create an anonymous function that subtracts -3 to anArray
var minusResults = anArray.map(function(x) {
    return (x-3);
})
//should return [-2, 0, 19, 11, 6, 3]
console.log("Here's the output of your anonymous function subtracting -3 from your array: ", minusResults)

$("#output1").html(anArray.join(", "));
$("#output2").html(addResults.join(", "));
$("#output3").html(minusResults.join(", "));