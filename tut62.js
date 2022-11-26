let jsonobj = {//if there is no double bracket then always put '=' sign
    name: "prathamesh",
    channel: "ProFeoNix",
    friend: "digvijay",
    food: "bhendi"
}

console.log(jsonobj);
console.log(JSON);

let myjsonstring = JSON.stringify(jsonobj);
console.log(myjsonstring);//here all obj is converted in string

//replace
myjsonstring = myjsonstring.replace("prathamesh", "pratik");
console.log(myjsonstring);

//to convert string back to object use "parse function"

newjsonobj = JSON.parse(myjsonstring);
console.log(newjsonobj);