console.log("This is tutorial 59");

function current_time() {
    let time_now = new Date();
    console.log(time_now);
    time.innerHTML = new Date();
}

current_time();
// setInterval(current_time, 1000);

let dt = new Date(0);
console.log(dt);  // The reference date of javascript is Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)


let new_date = new Date(2222, 11, 2); //javascript count the month from 0 to 11
console.log(new_date);

// let newDate = new Date (year, month, date, hours, minutes, seconds, milliseconds);
let new_dt = new Date(2036, 4, 7, 9, 1, 3, 23);
console.log(new_dt);

let yr = new_dt.getFullYear();
console.log("This year is ", yr);
let dat = new_dt.getDate(); //date is a function so it can not be used as variable
console.log("This date is ", dat);
let day = new_dt.getDay();
console.log("This day is ", day);
let month = new_dt.getMonth();
console.log("This month is ", month);
let minutes = new_dt.getMinutes();
console.log("This minutes is ", minutes);
let milliseconds = new_dt.getMilliseconds();
console.log("This milliseconds is ", milliseconds);

//changing time

//name_of_time_variable.set[what you want to];

new_dt.setDate(32);//as the date is greater than 31 and after 31 there doesnt exist any date so it push the date to next month
console.log(new_dt);

new_dt.setFullYear(2045);
console.log(new_dt);

new_dt.setHours(30);
console.log(new_dt);

new_dt.setSeconds(72);
console.log(new_dt);

new_dt.setMinutes(32);
console.log(new_dt);

console.log("The total milliseconds happened till now from reference date is ", Date.now()); f