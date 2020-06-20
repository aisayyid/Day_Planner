//Hooking in time from Moment.js
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");

$("#9am .textStay").val(localStorage.getItem("9am"));
$("#10am .textStay").val(localStorage.getItem("10am"));
$("#11am .textStay").val(localStorage.getItem("11am"));
$("#12pm .textStay").val(localStorage.getItem("12pm"));
$("#1pm .textStay").val(localStorage.getItem("1pm"));
$("#2pm .textStay").val(localStorage.getItem("2pm"));
$("#3pm .textStay").val(localStorage.getItem("3pm"));
$("#4pm .textStay").val(localStorage.getItem("4pm"));
$("#5pm .textStay").val(localStorage.getItem("5pm"));

//Text written in text area needs to be saved once the save button is clicked.
$(".saveBtn").click(function (event) {
    // event.preventDefault();
    var savedText = $(this).siblings(".textStay").val();
    var timeData = $(this).parent().attr("id");
    //The text needs to be saved to the local cache, so that when the user exits the page and comes back, the info is still there.
    localStorage.setItem(timeData, savedText);

})



//Scheduler needs to keep track of time, making the time that has passed, the present time, and future time be identifiable through colors.

