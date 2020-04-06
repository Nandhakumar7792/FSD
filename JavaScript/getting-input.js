// get multiple input from user in a single line

const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin
});

inp.on("line", (data) => {
    console.log(add(data));
});

function add(data) {
    var num = data.split(" ");
    //console.log(num);
    var sum=0;
    for(var i=0; i< num.length; i++){
        sum += parseInt(num[i]);
    }
    //console.log(num);
    
    
    return sum;
}

//get multiple input from user in single line
const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    console.log(add(userInput));
})

function add(data) {
    var sum=0;
    for(var i=0; i< data.length; i++){
        sum += parseInt(data[i]);
    }
    
    return sum;
}