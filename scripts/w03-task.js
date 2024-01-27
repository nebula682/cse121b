/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
     return number1 + number2;
}
let addNumber1 = Number(document.querySelector('#add1').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
document.querySelector('#addNumbers').addEventListener('click', addNumbers);





/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


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
let subtotal = parseFloat(document.getElementById(subtotal).value);
if (document.getElementById("member").checked);{
     subtotal = subtotal - subtotal * 0.2;
} 

document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied; by 2 Array */

/* Output Sum of Multiplied by 2 Array */
