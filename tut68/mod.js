console.log("This is mod");
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;//spelling of [length] not lenght
}

// module.exports = average;   

// module.exports = {
//     avg: average,
//     name: "Prathamesh",
//     college: "PCCOE"
// }
//this is kinda of array so no semi-colon[;] after defination only commas[,]

module.exports.name = "Prathamesh";