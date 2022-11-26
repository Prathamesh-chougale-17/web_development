console.log("This is tutorial 58");
// setTimeout --> Allows us to run the function once after the interval of time 
// clearTimeout --> Allows us to run the function repeatedly after the interval of time 
function greet(name, byetext) {
    console.log("Hello, good morning" + " " + name + "! " + byetext);
}
timeOut = setTimeout(greet, 2000, 'prathamesh', 'how are you');
console.log(timeOut);

// setTimeout(greet('prathamesh', 'how are you'), 4000);
//it execute the function but not under the time set *it eventually means that it execute function but skip the setTimeout call

clearTimeout(timeOut);

IntervalId = setInterval(greet, 1000, "prathamesh", "Good Night");
clearInterval(IntervalId);

//date and time

function display_time() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(display_time, 1000);