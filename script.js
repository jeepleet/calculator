// 1. Basic matematik operators functioner
function plusFunction(num1, num2) {
    return num1 + num2;
}

function minusFunction(num1, num2) {
    return num1 - num2;
}

function gangeFunction(num1, num2) {
    return num1 * num2;
}
    
function dividereFunction(num1, num2) {
    return num1 / num2;
}

// 2. Variables to update calculator display.
let numberOne;
let numberTwo;
let operator; 

// 3. A function that takes an operator, and two numbers and then calls one of the above functions on the numbers - We make an object.

const operatorObject = {
    "+": plusFunction,
    "-": minusFunction,
    "*": gangeFunction,
    "/": dividereFunction
}
function operate(operator, num1, num2) {
    return operatorObject[operator](num1, num2);
}
console.log(operate("-", 10, 4));