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
let justCalculated = "";
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
    console.log("numberone", numberOne)
    }
}
    

    if (operator !== "") { 
    if (button.classList.contains("digit")) {
        numberTwo += button.dataset.value;
        display.textContent = numberTwo;
        console.log("numbertwo",numberTwo)
    }
}

   if (e.target.classList.contains("operator")) {
    if (numberTwo !== "") {
       let calChain = operate(operator, Number(numberOne), Number(numberTwo));
       numberOne = calChain;
       numberTwo = "";
       display.textContent = calChain;
    }
        operator = e.target.dataset.value;
        display.textContent = operator;
        console.log(operator)
}

if (e.target.classList.contains("clear")) {
    display.innerHTML = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
}

if (e.target.classList.contains("equals")) {
    if (numberTwo !== "") {
        if (operator === "/" && Number(numberTwo) === 0) {
            display.textContent = "ERROR: Cant divide number by 0";
         } else {
    let result = operate(operator, Number(numberOne), Number(numberTwo));
    result = Math.round(result*100) / 100;
    display.textContent = result;
    justCalculated = true;
    if (justCalculated === true) {
        numberOne = "";
        numberTwo = "";
        operator = "";
        
    }
         }

    } else { 
        alert("Choose a second number to calculate");
    }

}
})


    
    
    
    




