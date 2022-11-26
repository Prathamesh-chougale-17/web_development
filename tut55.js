console.log("this is tutorial 55");
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log("==================================");
let friend = ["pratik", "sanjeev", "deepti", "pooja"]
for (let index = 0; index < friend.length; index++) {
    console.log("hello " + friend[index]);
}
console.log("==================================");
friend.forEach(function f(element) {
    console.log("Hello Friend " + element + " using,foreach function");
});
console.log("==================================");
for (element of friend) {
    console.log("hello Friend," + element + "to modern Javascript");
}
console.log("==================================");

let employee = {
    name: "harry",
    //key:class[key],here class is employee
    salary: 2,
    channel: "CHW"
}
for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}

console.log("==================================");

let k = 0;
while (k < 4) {
    console.log(k);
    k++;
}

j = 40;
do {
    console.log(j + " is less than 4");
    j++;
} while (j < 4);//do-while loop execute at least once rather the condition is true or false
