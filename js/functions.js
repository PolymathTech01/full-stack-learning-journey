"strict mode";
function sayHi() {
    console.log("this is a new function");
}

let func = sayHi 
console.log(sayHi); // Output: [Function: sayHi]
console.log(func); // Output: [Function: sayHi]

// Call backs

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     console.log("You agreed.");
// }

// function showCancel() {
//     console.log("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel);


// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// // ...use it later
// welcome(); // Error: welcome is not defined


// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     alert("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
//   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }
// }

// // Here we're out of curly braces,
// // so we can not see Function Declarations made inside of them.

// welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

// This code works as intended:

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello!");
//   };

// } else {

//   welcome = function() {
//     alert("Greetings!");
//   };

// }

// welcome(); // ok now

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Hello!"); } :
//   function() { alert("Greetings!"); };

// welcome(); // ok now