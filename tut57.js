//event is a signal that tell the computer that anything has occured
/*
browser event
click
context menu
mouseup/mousedown
mouseover/mouseout
mousemove

sumbit
focus

DOM Content Loaded

transistion end 
*/

function togglehide() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');//the single collen('')end are important to execute the function and retress the address 
    if (para.style.display == 'block') {
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block'; //if para.style.display is block then it changes the function to none due to which the para get disappeared.
        //para.style.diplay means in para function and create a style css and create display function and give it a command to be none or block or flex 
    }
}
let para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    alert('mouse inside');//this inducess a prompt of 'mouse inside'
    console.log("Mouse is inside");
});
para.addEventListener('mouseout', function run() {
    alert('mouse outside');//this inducess a prompt of 'mouse outside'
    console.log("Mouse is outside");
});