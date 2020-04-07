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

//get multiple input from user in multiple line
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

//program to find kth distinct element in an array
const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    console.log(find(userInput));
})

function find(data) {
    var len=data[0];
    var arr = data[1].split(" ");
    
    for(var i=0; i< len; i++){
        arr[i] = parseInt(arr[i]);
    }
    
    console.log(arr);
    
    
    return findDistinctelement(arr, len, 3);
}

function findDistinctelement(arr, n, k){
    var distCount= 0;
    
    for(var i=0; i<n; i++){
        var j=0;
        while(j<n){
            if(i!=j && arr[i] == arr[j]){
                break;
            }
            j += 1;
        }
        
        if(j == n){
            distCount += 1;
        }
        
        if(distCount == k){
            return arr[i];
        }
    }
    return "none";
}


//Program 3

const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    console.log(find(userInput));
})

function find(data) {
    var S=data[0];
    var T = parseInt(data[1]);
    var P = parseInt(data[2]);
    
    var str = S.split("");
    var res = [...str];
    for(var i=0; i< str.length; i++){
        if(T === 1 && ((i+1)%P ===0)){
            res[i] = str[i].toLowerCase();
        }
        else if(T===2 && ((i+1)%P ===0)) {
            console.log(str[i].toUpperCase())
            res[i] = str[i].toUpperCase();
        }
    }
    
    console.log(res);
    console.log(T);
    console.log(P);
    
    
    return res.join("");
}

/* 
ProFiLe
1
2
*/