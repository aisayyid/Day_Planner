//Hooking in time from Moment.js
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");

$("#9am .textStay").val(localStorage.getItem("9am"));

//Text written in text area needs to be saved once the save button is clicked.
$(".saveBtn").click(function (event) {
    // event.preventDefault();
    var savedText = $(this).siblings(".textStay").val();
    var timeData = $(this).parent().attr("id");
    localStorage.setItem(timeData, savedText);

})

//The text needs to be saved to the local cache, so that when the user exits the page and comes back, the info is still there.

//Scheduler needs to keep track of time, making the time that has passed, the present time, and future time be identifiable through colors.

