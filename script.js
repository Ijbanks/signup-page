//console.log("Hello from script.js");

let clubName = "Sunday Car Club";
console.log("Welcome to " + clubName);

let meetingDay = "We meet on Sundays";
console.log("We meet on " + meetingDay);

//Declare or define a function
function sayHi(){
console.log("Thanks for visiting " + clubName);
}

//Call the function
sayHi();

function sayBye (){
    console.log("Goodbye from " + clubName);
}
sayBye();
sayBye();

let nextButton = document.querySelector("#events-btn");
let eventsDescription = document.querySelector("#events-description");

//Declare a show message option
function showeventsDescription(){
    eventsDescription.textContent = "Our next event will be Sunday November 7th at 2:00 PM!";
}

nextButton.addEventListener("click", showeventsDescription);

//Dark Mode
let themeButton = document.querySelector("#theme-btn");

function toggleTheme(){
    document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);