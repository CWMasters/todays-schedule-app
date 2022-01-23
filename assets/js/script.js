let currentDay = document.querySelector("#currentDay");
let container = document.querySelector(".container")
let textArea = document.querySelector(".textarea")

var tasks= [];

// var moment = require('moment'); // require

// moment().format(); MOMENT FORMAT


// displaying time/date under header
let rightNow = moment().format("dddd, MMMM Do YYYY"); {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
     
    // TODO UPDATE EVERY #) MINS FOR TASKS
};




// // create task list to audit for color changes      
// var createTask = function(textArea, taskTime) {
//     // create element that make up task

//     var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskTime);

//     var taskP = $("<p>").addClass("m-1").text(textArea);

//     // append spand and p to parent 
//     taskli.append(taskSpan, taskP)

//     // check due date
//     auditTask(taskLi);

//     // append to page
//     $("#list-" + taskList).append(taskLi);
  
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
  
  
  
  
  
//     // get and convert the due date
//   var auditTask = function(taskEl) {
      
//       //convert to moment object at 5:00pm
//       var time = moment(date, "L").set("hour", 17);
    
//       // remove any old classes from the element
//       $(taskEl). removeClass("list-group-item-warning list-group-item-danger");
    
//       // apply new class if task is near/over due date
//       if (moment().isAfter(time)) {
//         $(taskEl).addClass("list-group-item-danger");
//       }
//       else if (Math.abs(moment().diff(time, "days")) <= 2) {
//         $(taskEl).addClass("list-group-item-warning");
//       }
//     };
    
  
  






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