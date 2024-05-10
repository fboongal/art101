// index.js - Libraries & jQuery
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 5/9/24
/*

// add a button to the end of the challenge section
$("#challenges").append("<button id='cButton'>Make Special</button>");
// add a click listener to the challenge button
$("#cButton").click(function(){
    // toggle "special" class to the section
    $("#challenges").toggleClass("special");
});



// ... problem section
$("#problems").append("<button id='pButton'>Make Special</button>");
// add a click listener to the problem button
$("#pButton").click(function(){
    //toggle "special" class to the section
    $("#problems").toggleClass("special");
});



// ...reflection section
$("#reflection").append("<button id='rfButton'>Make Special</button>");
// add a click listener to the reflection button
$("#rfButton").click(function(){
    //toggle "special" class to the section
    $("#reflection").toggleClass("special");
});



// ...results section
$("#results").append("<button id='rsButton'>Make Special</button>");
// add a click listener to the results button
$("#results").click(function(){
    // toggle "special" class to the section
    $("#results").toggleClass("special");
})
*/

$(".special-section").append("<button>Make Special</button>");
$(".special-section button").click(function(){
    $(this).parent().toggleClass("special");
})


