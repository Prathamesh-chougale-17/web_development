//Arrow function

// let greet = () => {
//     console.log("good morning");
// }

//alternative 

let greet = () => console.log("Good Morning");

greet();
setTimeout(() => {
    console.log("This is setTimeout");
}, 2000);

let sum = (a, b) => a + b;
console.log(sum);

let half = a => a / 2; //for only one argument no need of bracket


let obj1 = {
    greeting: "good morning",
    names1: ["prathamesh", "harsh", "pratik"],
    speak() {
        this.names1.forEach((student) => {//in arrow 'this' function can be called from parent  
            console.log(this.greeting + " kii kaa " + student);//there is comma in catenation other wise its gives us different result
        });//this function point to the function after it and take the value from that function
    }//laxical this - the kind of 'this' that canpoint any function from parent 
}
obj1.speak();

//for function

let obj2 = {
    greeting1: "good morning",
    names: ["Harry", "Rohan", "SkillF", "DjKhiladi"],
    speak() {
        this.names.forEach(function s(student) {
            console.log(this.greeting1 + " Kukdoo Koo " + student);//function 
        });//in function defined student the 'this' can only be accessed by speak function
    }
}
obj2.speak();


