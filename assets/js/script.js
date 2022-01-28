var timeBlock = document.querySelector(".time-block");
var saveBtnEl = document.querySelector(".saveBtn")

const taskArray = []; 

// displaying time/date under header
let rightNow = moment().format("dddd, MMMM Do YYYY"); {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
}; 


    // colors for time-blocks according to hour
    // assigned hourSinceStartDay string
    let hoursSinceDayStart = moment().startOf('day').fromNow();
    // change hourSinceDayStart from a string to integer (numbers) using parseInt
    hoursSinceDayStart = parseInt(hoursSinceDayStart.replace('hours ago', ""))
    // array for hours in day
    let hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    for (var i = 0; i < hours.length; i++) {

    let hourClass = '.hour' + i;

    // conditions compared to.. ELSE DO NOT HAVE CONDITIONS
    if  (hoursSinceDayStart > hours[i]) {
        $('.time-block' + hourClass).addClass('past');  
    }
    else if (hoursSinceDayStart < hours[i]) {
        $('.time-block' + hourClass).addClass('future');
    } 
    else {
        $('.time-block' + hourClass).addClass('present');
        } 
    };

      // passing value into saveTasks of what to save
    var saveTasks = function(event) { 
        console.log(event.target)
        var textValue = $("." + event.target.id).val();
        console.log(textValue);
        localStorage.setItem(event.target.id, textValue);
      };
      

      // looading each task hour to be persistent and load on refresh
    var loadTasks = function() {
        var hour9 = localStorage.getItem("hour9");
        $(".hour9").val(hour9)
        var hour10 = localStorage.getItem("hour10");
        $(".hour10").val(hour10)
        var hour11 = localStorage.getItem("hour11");
        $(".hour11").val(hour11)
        var hour12 = localStorage.getItem("hour12");
        $(".hour12").val(hour12)
        var hour13 = localStorage.getItem("hour13");
        $(".hour13").val(hour13)
        var hour14 = localStorage.getItem("hour14");
        $(".hour14").val(hour14)
        var hour15 = localStorage.getItem("hour15");
        $(".hour15").val(hour15)
        var hour16 = localStorage.getItem("hour16");
        $(".hour16").val(hour16)
        var hour17 = localStorage.getItem("hour17");
        $(".hour17").val(hour17)
    }


    loadTasks();

    $(".saveBtn").on("click", saveTasks);


// updateCurrentDay();
// setInterval(function() {
//     updateCurrentDay();
// }, 1000 * 60  * 10);








