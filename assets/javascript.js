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

var tasks = JSON.parse(localStorage.getItem("workday"));
if (tasks) {
    workdayTimeline = tasks;
}

workdayTimeline.forEach(function(timeblock, index) {
    var label = timeblock.time;
    var color = colorRow(label);
    var row = 
        '<div class="time-block" id="' +
	    index +
	    '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		label +
		'</div><textarea class="form-control ' +
		color +
		'">' +
		timeBlock.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	$(".container").append(row);
});