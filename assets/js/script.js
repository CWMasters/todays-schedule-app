



// var moment = require('moment'); // require
// moment().format(); MOMENT FORMAT


// displaying time/date under header
let rightNow = moment().format("dddd, MMMM Do YYYY"); {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
};



    // colors for time-blocks
    // assigned hourSinceStartDay string
    let hoursSinceDayStart = moment().startOf('day').fromNow();
    // change hourSinceDayStart from a string to integer (numbers) using parseInt
    hoursSinceDayStart = parseInt(hoursSinceDayStart.replace('hours ago', ""))
    // array for hours in day
    let hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    for (var i = 0; i < hours.length; i++) {

    let hourClass = '.hour-' + i;

    // conditions compared to
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
    



    

   



// // create task list to audit for color changes      
// var createTask = function(textBlock, taskTime) {
//     // create element that make up task

//     var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskTime);

//     var taskP = $("<p>").addClass("m-1").text(textBlock);

//     // append spand and p to parent 
//     taskli.append(taskSpan, taskP)

//     // check due date
//     auditTask(taskLi);

//     // append to page
//     $("#list-" + taskList).append(taskLi);
  
//   };









// //Change textarea background color based on time
// var checkTime = function () {
//     //Get Current time
//     var currentTime = moment().format('H');


//     //get all elements with class "taskarea"
//     var textBlock = $(".textarea");

//     //loop through taskarea classes
//     for (var i = 0 ; i < textBlock.length ; i++) {

//         //Get element i's ID as a string
//         var elementID = textBlock[i].id;

//         //get element by ID
//         var manipID = document.getElementById(textBlock[i].id)

//         //remove any old classes from element
//         $(textBlock[i].id).removeClass(".present .past .future");

//         // apply new class if task is present/past/future
//         if (elementID < currentTime) {
//             $(manipID).addClass("past");
//         } else if (elementID > currentTime) {
//             $(manipID).addClass("future");
//         } else {
//             $(manipID).addClass("present");
//         }
//     }
// }


// checkTime();




//  // get and convert the due date
//  var auditTask = function(container) {
//      console.log(container)
     
      
//     //convert to moment object at 09:00
//     var time = moment(date, "L").set("hour", 09);
  
//     // // remove any old classes from the element
//     // $(taskEl). removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     }
//     else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }
//   };






//   var loadTasks = function() {
//       tasks = JSON.parse(localStorage.getItem("tasks"));

//       // if nothing in local storage, create a new object to track all task status arrays
//       if (!tasks) {
//           tasks = {
//               textarea: [],
//           }
//       };

//       // loop over object proprties
//       $.each(tasks, function(list, arr) {
//         console.log(list, arr);
//         // then loop over sub-array
//         arr.forEach(function(task) {
//           createTask(task.text, task.date, list);
//         });
//       });
//   };

//   var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };
  
  




// import moment from 'moment';

// moment().format();
                                                                            
// import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';







  // // from taskmaster
// $(".list-group").on("click", "p", function() {
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace current p element with textarea
//     var textInput = $("<textarea>")
//       .addClass("form-control")
//       .val(text);
//     $(this).replaceWith(textInput);
  
//   // focus new element
//   textInput.trigger("focus");
//   });