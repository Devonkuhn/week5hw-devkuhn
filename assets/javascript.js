$( document ).ready(function() { 
    console.log( "ready" ); 
});

var currentTime = moment().format('dddd MMMM Do, h A');
var currentHour = moment().format("h A")

$("#currentDay").text(currentTime);

