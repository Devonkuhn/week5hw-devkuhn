$( document ).ready(function() { 
    console.log( "ready" ); 
});

var currentTime = moment().format('dddd MMMM Do, h A');
var currentHour = moment().format("h A")

$("#currentDay").text(currentTime);

var workdayTimeline = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
];