//1.Write a function to generate random whole number between 0 to 10;
function generateRandomWholeNumber(){
    console.log(Math.round(Math.random() * 10));
}
  
generateRandomWholeNumber();

//------------------------------------------------------------------------
//2.Write a function which will get two parameters and return a sum of it.
function sumTwoNumbers(a, b){
    console.log(a+b);
}
  
sumTwoNumbers(5, 10);

//------------------------------------------------------------------------
//3. Write a program to create a calculator with all arithmetic operations has functions;

function sumTwoNumbers(a, b){
    console.log(a+b);
  }
  
  function subtractTwoNumbers(a, b){
    console.log(a-b);
  }
  
  function multiplyTwoNumbers(a, b){
    console.log(a*b);
  }
  
  function divideTwoNumbers(a, b){
    console.log(a/b);
  }
  
  sumTwoNumbers(5, 10);
  subtractTwoNumbers(9, 7);
  multiplyTwoNumbers(7, 13);
  divideTwoNumbers(8, 4);
  
//------------------------------------------------------------------------
/*4. Do the following.
Create a function to sum two numbers and return the value. 
Create a function to generate a random number between 0 to 10
Pass two values to the sum function, But first value should be passed by the user and the second value should be generated by a random function. */

function sumTwoNumbers(a, b) {
    console.log(a+b);
}
  
function generateRandomNumber() {
    result = (Math.round(Math.random() * 10));
    //console.log(result);
    return result;
}
  
sumTwoNumbers(3, generateRandomNumber())