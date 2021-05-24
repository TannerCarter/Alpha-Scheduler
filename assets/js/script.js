var currentDate = moment().format("dddd, MMM Do YYYY");
var currentHour = moment().format("H");
// Date and Time, .lead - #currentDay
$("#currentDay").text(currentDate);

console.log("Current Hour?", currentHour); //Hour check

//Load scheme
$(document).ready(function () {
  colorTime();
  scheduleText();
});
//Function to set color according to current time.
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

//Save button variables to use
var descriptionTime;
var descriptionText;

//Save button functionality
$(".saveBtn").click(function () {
  descriptionTime = $(this).siblings(".hour").text();
  console.log("Schedule Time:", descriptionTime);
  descriptionText = $(this).siblings(".description").val();
  console.log("Description:", descriptionText);
  localStorage.setItem(descriptionTime, JSON.stringify(descriptionText));

  colorTime();
  scheduleText();
});

//Save Description
function scheduleText() {
  var descriptionText9 = JSON.parse(localStorage.getItem("9 A.M."));
  $("#9").val("");
  $("#9").val(descriptionText9);

  var descriptionText10 = JSON.parse(localStorage.getItem("10 A.M."));
  $("#10").val("");
  $("#10").val(descriptionText10);

  var descriptionText11 = JSON.parse(localStorage.getItem("11 A.M."));
  $("#11").val("");
  $("#11").val(descriptionText11);

  var descriptionText12 = JSON.parse(localStorage.getItem("12 P.M."));
  $("#12").val("");
  $("#12").val(descriptionText12);

  var descriptionText1 = JSON.parse(localStorage.getItem("1 P.M."));
  $("#13").val("");
  $("#13").val(descriptionText1);

  var descriptionText2 = JSON.parse(localStorage.getItem("2 P.M."));
  $("#14").val("");
  $("#14").val(descriptionText2);

  var descriptionText3 = JSON.parse(localStorage.getItem("3 P.M."));
  $("#15").val("");
  $("#15").val(descriptionText3);

  var descriptionText4 = JSON.parse(localStorage.getItem("4 P.M."));
  $("#16").val("");
  $("#16").val(descriptionText4);

  var descriptionText5 = JSON.parse(localStorage.getItem("5 P.M."));
  $("#17").val("");
  $("#17").val(descriptionText5);

  console.log(
    "MUST delete and save ea. description added+saved or it will persist."
  );
}
