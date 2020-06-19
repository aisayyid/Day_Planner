//Hooking in time from Moment.js
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");

//Text written in text area needs to be saved once the save button is clicked.

//The text needs to be saved to the local cache, so that when the user exits the page and comes back, the info is still there.

//Scheduler needs to keep track of time, making the time that has passed, the present time, and future time be identifiable through colors.

