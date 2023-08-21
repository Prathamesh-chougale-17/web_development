alert("This is a message");//moddal window - this is kind of window or page until its not done it wont procced ahead
//alert does not return any thing

let name = prompt("Enter your name", 'guest');

console.log(name);

let delete_post = confirm("Do you really want to delete post? ");

if (delete_post) {
    //by default this is true 
    console.log("You have successfully deleted your post");
}
else {
    //by default this is false
    console.log("You have not deleted the post");
}
