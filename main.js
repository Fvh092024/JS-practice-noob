//initialize the count as 0
// function universeAnswer() {
//   console.log(42);
// }
// universeAnswer();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function raceTime() {
//   console.log(lap1 + lap2 + lap3);
// }
// raceTime();
// let lapsCompleted = 0;
// function currentLap() {
//   lapsCompleted = lapsCompleted + 1;
// }
// currentLap();
// currentLap();
// currentLap();
// console.log(lapsCompleted);

// let countEl = document.getElementById("count-el");

// console.log(countEl);

// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
// }
// function save() {
//   console.log(count);
// }

// let userName = "Per";
// let notes = "You have three new notifications";
// let messageToUser = notes + ", " + userName + "!";
// console.log(messageToUser);

// let myName = "Fartein";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + myName;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");
// let myName = "Fartein";
// let greeting = "Welcome back, ";
// welcomeEl.innerText = greeting + myName + "!";
// welcomeEl.innerText = welcomeEl.innerHTML + "👋";

// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   // Change this to use the plus equal technique you've learned
//   count += 1;
//   countEl.innerText = count;
// }

// function save() {
//   console.log(count);
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el");
// let count = 0;
// let saveEl = document.getElementById("save-el");

// function increment() {
//   count += 1;
//   countEl.innerText = count;
// }

// function save() {
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
//   let countShow = " " + count + " - ";
//   saveEl.textContent += countShow;
//   count = 0;
//   console.log(count);
//}

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
}
