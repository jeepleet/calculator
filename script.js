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
let numberOne = "";
let numberTwo = "";
let operator = "";
// 3. We make an object of the operator functions.

const operatorObject = {
    "+": plusFunction,
    "-": minusFunction,
    "*": gangeFunction,
    "/": dividereFunction
}

// A function that takes an operator, and two numbers and then calls one of the above functions on the numbers
function operate(operator, num1, num2) {
    return operatorObject[operator](num1, num2);
}
console.log(operate("*", 10, 4));

// Function that populates display when buttons are clicked.
const display = document.querySelector('.displaycontainer');
const keyDigit = document.querySelector('.container');
keyDigit.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    if (operator === "") {
    if (button.classList.contains("digit")) {
     numberOne += button.dataset.value;
    display.textContent = numberOne;
    }
}
    

    if (operator !== "") {
    if (button.classList.contains("digit")) {
        numberTwo += button.dataset.value;
        display.textContent = numberTwo;
    }
}

   if (e.target.classList.contains("operator")) {
        operator = e.target.dataset.value;
        display.textContent = operator;
}

if (e.target.classList.contains("clear")) {
    display.innerHTML = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
}

if (e.target.classList.contains("equals")) {
    let result = operate(operator, Number(numberOne), Number(numberTwo));
    display.textContent = result;
    }
})

    
    
    
    




