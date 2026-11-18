let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin=false} = user
console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalaries = (salaries) => {
    let highestSalary = 0
    let maxName = null
    for (const [name, amount] of Object.entries(salaries)){
        if (amount > highestSalary){
            highestSalary = amount
            maxName = name
        }
    }
    return maxName
}

console.log(topSalaries(salaries))