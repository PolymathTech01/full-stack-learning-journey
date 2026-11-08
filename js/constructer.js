// Constructor function

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin);

// the function does something like this
// function User(name) {
//     // this = {}  (implicitly)

//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;

//     // return this; (implicitly)
// }

function User(name) {
  if (!new.target) return new User(name);

  this.name = name;
}

let john = new User("John");
console.log(john.name);

// Methods in constructor
// Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

// Of course, we can add to this not only properties, but methods as well.

// For instance, new User(name) below creates an object with the given name and the method sayHi:

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(`My name is ${this.name}`);
  };
}

let alli = new User("Alli");

alli.sayHi();

// Is it possible to create functions A and B so that new A() == new B()?

// Yes, it is possible. if a funciton returns an object then "new" returns it instead of this.

// So they can, for instance, return the same externally defined object 'obj"
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}


function Calculator() {
    this.read = function () {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0)
    }
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
}

// let calculator = new Calculator()

// calculator.read()

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('How much to add?', 0)
    }
}

