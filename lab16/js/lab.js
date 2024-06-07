// index.js - Lab 16: JSON and APIs
// Author: Franchesca Boongaling and Ruby Hirsch
// Date: 6/6/24

$.ajax({
    dataType: "json", // Note: dataType should be lowercase "json"
    success: function(data) {
        console.log(data);
        $('#response').html(`<p>${data.answer}</p><img src="${data.image}" alt="Comic">`);
    },
    error: function(jqXHR, textStatus, errorThrown) { 
        console.error("Error:", textStatus, errorThrown);
        $('#response').html('<p>Sorry, something went wrong. Please try again later.</p>');
    }
});