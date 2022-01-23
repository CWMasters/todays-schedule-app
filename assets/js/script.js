let currentDay = document.querySelector("#currentDay");
let container = document.querySelector(".container")


// var moment = require('moment'); // require

// moment().format(); MOMENT FORMAT





// displaying time/date under header
let rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); {
    console.log(rightNow);
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}; 



    
      
    








// import moment from 'moment';

// moment().format();
                                                                            
// import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';



// from taskmaster
$(".list-group").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace current p element with textarea
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    $(this).replaceWith(textInput);
  
  // focus new element
  textInput.trigger("focus");
  });


  // get and convert the due date
var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl).find("span").text().trim();
    
    //convert to moment object at 5:00pm
    var time = moment(date, "L").set("hour", 17);
  
    // remove any old classes from the element
    $(taskEl). removeClass("list-group-item-warning list-group-item-danger");
  
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
      $(taskEl).addClass("list-group-item-danger");
    }
    else if (Math.abs(moment().diff(time, "days")) <= 2) {
      $(taskEl).addClass("list-group-item-warning");
    }
  };
  