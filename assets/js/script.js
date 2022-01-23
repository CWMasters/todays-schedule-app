let currentDay = document.querySelector("#currentDay");


moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// // var moment = require('moment'); // require


// moment().format(); MOMENT FORMAT




// DISPLAY TIME UNDER HEADER



var displayDate = function() {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    setInterval=function() {
        $(currentDay) = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    }
};
    
      
    




// display current date



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