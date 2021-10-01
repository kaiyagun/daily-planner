console.log("whats up")

//add timeblocks
//color them based on past/present/future (colors already decided in css, just need moment to differentiate)
//events saved in localstorage

var today = moment();

// display date and time in heading
$("#currentDay").text(today.format("MMM Do, YYYY HH:mm")
);

// init();
// //init should pull from localstorage and fill in hour blocks, as well as color code blocks
// function init() {
    
    
//     }

// 