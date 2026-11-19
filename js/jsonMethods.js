// JSON.stringify to convert objects into JSON
// JSON.parse to convert JSON back into an object

let student = {
    name: 'John',
    age: 25,
    isAdmin: false,
    courses: ["html", "css", "js"],
    spouse: null
};
let json = JSON.stringify(student);
console.log(json);
console.log(typeof json);

// Limitation in JSON, there must be no circular references

let room = {
    number: 23
}
let meetup = {
    title: "Conference",
    participants: ["john", "ann"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup // room references meetup

// JSON.stringify(meetup) // TypeError: Converting circular structure to JSON

// EXCLUDING AND TRANSFORMING: replacer
// the full syntax of JSON.stringify is
// let json = JSON.stringify(value[, replacer, space])

meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
}

room.occupiedBy = meetup // room references meetup

// If we pass an array of properties to it, only these properties will be encoded.
console.log(JSON.stringify(meetup, ["title", "participants", "place", "name", "number"]));
//Now everything except occupiedBy is serialized. But the list of properties is quite long.
// Fortunately, we can use a function instead of an array as the replacer.

// return everything except occupiedB

console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(key, value);
    return (key === "occupiedBy") ? undefined : value;
}))

// Formatting space
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, "  "));

// JSON.parse
// let value = JSON.parse(str[, reviver]);
// str: JSON-string to parse
// reviver, optional function(key, value) that will be called for each (key,value)
// pair and can transform the value

let numbers = "[0, 1, 2, 3]"
numbers = JSON.parse(numbers)
console.log(numbers[1]);

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(userData);
console.log(user.friends[0]);

// using reviver

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
meetup = JSON.parse(str)
// console.log(meetup.date.getDate()) //error
meetup = JSON.parse(str, function(key, value){
    if (key === "date") return new Date(value);
    return value;
})
console.log(meetup.date.getDate())

// works for nested objects as well

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value){
    if (key === "date") return new Date(value);
    return value;
})
console.log(schedule.meetups[1].date.getDate())