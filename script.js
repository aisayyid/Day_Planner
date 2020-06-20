//Hooking in time from Moment.js
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");

// Getting the values of the textarea through the textStay class to keep it on the page as long as its in localStorage
$("#9 .textStay").val(localStorage.getItem("9"));
$("#10 .textStay").val(localStorage.getItem("10"));
$("#11 .textStay").val(localStorage.getItem("11"));
$("#12 .textStay").val(localStorage.getItem("12"));
$("#13 .textStay").val(localStorage.getItem("13"));
$("#14 .textStay").val(localStorage.getItem("14"));
$("#15 .textStay").val(localStorage.getItem("15"));
$("#16 .textStay").val(localStorage.getItem("16"));
$("#17 .textStay").val(localStorage.getItem("17"));

//Text written in text area needs to be saved once the save button is clicked.
$(".saveBtn").click(function (event) {
    // event.preventDefault();
    var savedText = $(this).siblings(".textStay").val();
    var timeData = $(this).parent().attr("id");
    //The text needs to be saved to the local cache, so that when the user exits the page and comes back, the info is still there.
    localStorage.setItem(timeData, savedText);

})
// Scheduler needs to keep track of time, making the time that has passed, the present time, and future time be identifiable through colors.
// Creating function to compare time frm Moment,js to time in rows.
function timeSensor() {
    var currentTime = moment().hours()
    $(".row").each(function () {
        const rowTime = parseInt($(this).attr("id"));
        // If statements comparing time parsed from row ids to universal clock, to indicate through clors whether the time has passed, is current, or is yet to come.
        if (rowTime < currentTime) {
            $(this).addClass("past");
        }

        else if (rowTime === currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        };

    })
};
//Calls time sensor function.
timeSensor();






