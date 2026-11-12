// Translate border-left-width to borderLeftWidth

const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
};

console.log(camelize("border-left-width"));
console.log(camelize("list-style-image"))


const filterRange = (arr, a, b) => {
    return arr.filter(item => item >= a && item <= b)
}

let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
console.log(filtered)

const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val < a || val > b) {
            arr.splice(i, 1)
            i--
        }
    }
}

// sort in decreasing order

arr = [5, 2, 1, -10, 8]

const compareDescending = (a, b) => {return b - a}
const result = arr.sort(compareDescending)
console.log(result)

arr = ["Html", "JavaScript", "CSS"];

const copySorted = (arr) => {
    return arr.slice().sort()
}
console.log(copySorted(arr))
console.log(arr)

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };
    this.calculate = function(str){
        let split = str.split(" ");
        a = +split[0];
        op = split[1];
        b = +split[2];

        if(!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }
        return this.methods[op](a, b)
    }
    this.addMethod = function(name, func){
        this.methods[name] = func;
    }
}

let calc = new Calculator

console.log(calc.calculate("4 + 8"))
console.log(calc.calculate("4 - 8"))

calc.addMethod("/", (a, b)=> a / b)
calc.addMethod("*", (a, b)=> a * b)
calc.addMethod("**", (a, b)=> a ** b)

console.log(calc.calculate("2 ** 5"))

let john = { name: "John", age: 25, id:1, surname: "Smith" };
let pete = { name: "Pete", age: 30, id: 2, surname: "Hunt" };
let mary = { name: "Mary", age: 28, id: 3, surname: "key" };

let users = [ john, pete, mary ];

let names = users.map(person => person.name)

console.log(names)

let userMapped = users.map(person => (
     {
        fullName: person.name + " " + person.surname,
        id: person.id,
    }
))
console.log(userMapped)

const sortByAge = (arr)=> {
     arr.sort((a, b)=> a.age - b.age) // inplace
}
sortByAge(users)
console.log(users)