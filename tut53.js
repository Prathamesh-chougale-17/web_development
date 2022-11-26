console.log("This is tut 53");

function relation(name = 'prathamesh', relation = 'brother', name2 = 'pratik') {
    console.log(name + ' is ' + relation + ' of ' + name2);
}
function sum(a, b, c) {
    d = a + b + c;
    return d;
    // no code will execute after return
}

let name1 = 'prathamesh';
let name2 = 'pratik';
let name3 = 'harsh';
let name4 = 'digvijay';
let relation1 = 'brother';
let relation2 = 'friend'
relation();//to execute théfunction you have to pass the function
relation(name1, relation1, name2);//to execute théfunction you have to pass the function
relation(name1, relation1, name3);//to execute théfunction you have to pass the function
relation(name1, relation2, name4);//to execute théfunction you have to pass the function
relation(name2, relation1, name3);//to execute théfunction you have to pass the function

sum(2, 5, 6);
console.log(sum);//this will print function as it is
let summation = sum(2, 5, 6);
console.log(summation);//this will print sum of the number
