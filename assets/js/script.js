var currentDate = moment().format("dddd, MMM Do YYYY");
var currentHour = moment().format("H");
// Date and Time, .lead - #currentDay
$("#currentDay").text(currentDate);

console.log("Current Hour?", currentHour); //Ensure moment gave current/ correct hour check

$(document).ready(function () {
  colorTime();
});

function colorTime() {
  $(".description").each(function () {
    var perSchedule = parseInt($(this).attr("id"));
    console.log("Schedule Times", perSchedule);

    if (currentHour > perSchedule) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentHour < perSchedule) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}
