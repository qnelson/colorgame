$(document).ready(function () {

//Inserts possible colors into an array
var colorList = ['red', 'blue', 'green', 'yellow'];

//Sets the color variable to a randomized value from the array
var color = colorList[Math.floor(Math.random() * colorList.length)];


//Appends the shapes to the DOM
$('.container').append('<button id="red"></buttonv>');
$('.container').append('<button id="blue"></button>');
$('.container').append('<button id="yellow"></button>');
$('.container').append('<button id="green"></button>');

//Appends text to the DOM upon page load
$('#text').text('Click On ' + color);

//Button functionality
$('button').on('click', function() {
console.log(color);

//If statement that checks if the ID of the button clicked matches the
//randomized value
    if ($(this).attr('id') === color) {

      color = colorList[Math.floor(Math.random() * colorList.length)];
      $('#text').text('Click On ' + color);
      $('#answer').text('Correct!');

    }else {
      $('#answer').text('Incorrect');

    }
  });
});



/*

Author: Quinn P. Nelson
Date Created: 5/4/16

*/
