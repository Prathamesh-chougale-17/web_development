let main = document.getElementById('main');
console.log(main);
let ul = document.getElementById('ul');
console.log(ul);
console.log(ul.innerHTML);
// let change = ul.innerHTML = "Dyanamic Element";
// console.log(change);

let container = document.getElementsByClassName('container');
console.log(container);

let selector = document.querySelector('.container');
console.log('selector are', selector);

let selector1 = document.querySelector('#ul');
console.log('selector are', selector1);

let selector2 = document.querySelector('#ul>li');
console.log('selector are', selector2);//its selects only first li
//also use child selector to select any function so you could modify it

let selector3 = document.querySelectorAll('#ul>li');
console.log('selector are', selector3);

selector3[0].innerHTML = "Inserted";//change the selected function
selector3[3].innerHTML = "Inserted3";//change the selected function
