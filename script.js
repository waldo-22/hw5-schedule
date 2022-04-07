let timeDisplayEl = $('#time-display');

function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);  
    console.log(displayTime);
}
setInterval(displayTime, 1000);

// localStorage.getItems() {
//     text.
// }