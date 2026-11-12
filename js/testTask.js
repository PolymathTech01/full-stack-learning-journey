function Calculate() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = (str) =>{
        let split = str.split(" ");
        let a = split[0];
        let op = split[1];
        let b = split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN
        }
        return this.methods[op](a, b)
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    }
}

let john = { name: "John", age: 25, id:1, surname: "Smith" };
let pete = { name: "Pete", age: 30, id: 2, surname: "Hunt" };
let mary = { name: "Mary", age: 28, id: 3, surname: "key" };

let users = [ john, pete, mary ];

const names = users.map(person => person.name);

console.log(names);

const sortByAge = (arr) => {
    arr.sort((a, b)=> a.age - b.age)
}
sortByAge(users)

console.log(users)

// Shuffle an array

let arr = [1, 2, 3]

function shuffle(array){
    array.sort(() => Math.random() - 0.5)
}