//Date: 5/14/2024
 
// console.log("dn")

function getNameAndDisplay() {
    let nameo = prompt("Name please:");
    $('#title').html('Hello, ' + nameo + '!');
};

$("#my-button").click(getNameAndDisplay)

// $("#my-button").click(function() {
//     console.log("RAAAAAAAAAAH");
// })
