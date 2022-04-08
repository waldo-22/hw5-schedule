let timeDisplayEl = $('#time-display');
//  doc . query slector targets element "."""
let containerEl = document.querySelector(".container")
console.log(containerEl);

// let count= 0
// let test = document.querySelector(".jumbotron")

// now I need to have an event listener on the containerel
// that uses event.target to see which button is pressed
containerEl.addEventListener("click", function(event) {
    // console.log(event.target);
    if(event.target.matches("button")){
        // console.log(event.target);
        // console.log(typeof(event.target.id))
        // localStorage.setItem(event.target.id, "whatever I grab from the text area")
//temp1.parentElement.previousElementSibling.value
       
        // make it so when a button is clicked I look at the input.value that is next to the button I clicked
        // count++
        // console.log(count)

        console.log(event.target.id)
        console.log(event.target.parentElement.previousElementSibling.value )
        localStorage.setItem(event.target.id, event.target.parentElement.previousElementSibling.value )
        // line 25 is the exact same as 27 if we were to click the save button for 9am
    }
}) 
function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    // console.log(displayTime);
}
setInterval(displayTime, 1000);
// let userSubmit = document.querySelector(".text");
// make unique element and grab from local storage from unique key******
function renderLastRegistered() {
    let hours = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
    
    let hoursPt2 = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
    
    for (let i = 0; i < 9; i++) {
        let userSubmit = localStorage.getItem(hoursPt2 [i]);
        let textBox = document.getElementById(hours[i]);
        textBox.innerHTML = userSubmit;
    }
}
renderLastRegistered();
