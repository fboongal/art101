// index.js - Functions
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 4/30/24

// define function 
function getUserName() {
    // prompt to ask user for their name
    const userName = window.prompt("Ye name please?!");

    // convert name into an array, sort the array, join the array and turn into string
    return userName.split('').sort().join('');
}

// function output
document.writeln("Ye NEW name: " , getUserName(),"<br>");