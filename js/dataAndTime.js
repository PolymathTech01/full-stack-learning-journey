let now = new Date() //
// without arguments - new Date() creates a Date object for the current date and time
console.log(now)

// new Date(milliseconds)
// Create a Date object with the time equal to number
// of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

let jan01_1970 = new Date(0);
console.log(jan01_1970)

// adding 24hrs we get the next day
let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970)

let dec31_1969 = new Date(-24 * 3600 * 1000);// dates before 01.01.1970 have negative timestamps
console.log(dec31_1969)

let date = new Date("2017-01-26");
console.log(date)
console.log(new Date(2011, 0, 1, 0, 0, 0, 0))
console.log(new Date(2011, 0, 1)); // the same, hours etc are 0 by default
console.log(new Date(2011, 0, 1, 2, 3, 4, 567));
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getDay()) // getting the day of the week

console.log(new Date().getTimezoneOffset()) // returns the difference between UTC and local timezone, in minutes

// When a Date object is converted to number, it becomes the timestamp same as date.getTime():
console.log(+date)
console.log(date.getTime())

let start = Date.now()
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = Date.now()
console.log(`The loop took ${end - start} ms`)

// if we only want to measure time, we don't need the Date object
function diffSubtract(date1, date2) {
    return date2 - date1
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime()
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now()
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start
}

let time1 = 0;
let time2 = 0;
// added for "heating up" prior to the main loop
bench(diffSubtract);
bench(diffGetTime);

// run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log("time of diffSubtract " + bench(diffSubtract) + "ms")
console.log("time of diffGetTime " + bench(diffGetTime) + "ms")

console.log('Total time for diffSubtract: ' + time1)
console.log('Total time for diffGetTime: ' + time2)

// Date.parse from a string

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms)

// a new date object can be created from the timestamp
let newDate = new Date("2012-01-26T13:51:50.417-07:00");
console.log(newDate)

function getWeekDay(date){
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return days[date.getDay()]
}
date = new Date(2014, 0, 3)
console.log(getWeekDay(date));

function getLocalDay(date) {
    let day = date.getDay()
    if (day === 0){
        day = 7
    }
    return day
}
date = new Date(2012, 0, 3)
console.log(getLocalDay(date));

// Which day of the month was many days ago?

function getDateAgo(date, days){
    date.setDate(date.getDate() - days)
    return date.getDate()
}
date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 2));
