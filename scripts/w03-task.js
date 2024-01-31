/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
     return number1 + number2;
}
function addNumbers (add1, add2){

let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);





/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
     return number1 - number2;
}
 const subtractNumbers = function(subtract1, subtract2){

let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
 }


document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply =(number1, number2) => (number1 *number2);

const multiplyNumbers = (factor1, factor2) =>{

     let multiplyNumber1 = Number(document.querySelector('#factor1').value);
     let multiplyNumber2 = Number(document.querySelector('#factor2').value);
     document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x, y) => x /y;
const divideNumbers = () => {
     let dividend =parseFloat(document.getElementById("dividend").value);
     let divisor =parseFloat(document.getElementById("divisor").value);
     let quotient = divide(dividend, divisor);
     document.getElementById("quotient").value = quotient;
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
function getTotal () {
let subtotal = parseFloat(document.getElementById("subtotal").value);
if (document.getElementById("member").checked) {
     subtotal = subtotal - subtotal * 0.2;
} 

document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
let numbersArray =[1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;

/* Output odds only array*/
let numberArray =[1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#odds").innerHTML= numbersArray.filter(number =>number%2 ===1);

/* Output Evens Only Array */
let myArray = [1,2,3,4,5,6,,7,8,9,10,11,12,13]
document.querySelector("#evens").innerHTML = numbersArray.filter(number =>number%2 ===0);

/* Output Sum of Source Array */
let herArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied; by 2 Array */
let hisArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let theArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.reduce((sum, number) => sum + number )*2 ;

