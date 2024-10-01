function add(num1, num2) {
    console.log(num1);
    console.log(num2);
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {  
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(operator, num1, num2) {

    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function changeDisplay(value) {
    const display = document.getElementById("display-text");
    display.innerHTML = value;
}

function allClear() {
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "0";
    changeDisplay(displayValue);
}

function clear() {
    if (operator === "") { // First number
        if (num1.length >= 2) {
            num1 = num1.slice(0, num1.length-1);
            displayValue = num1;
        }
        else {
            num1 = num1.slice(0, num1.length-1);
            displayValue = "0";
        }
    } else { // Second number
        if (num2.length >= 2) {
            num2 = num2.slice(0, num2.length-1);
            displayValue = num2;
        }
        else {
            num2 = num2.slice(0, num2.length-1);
            displayValue = "0";
        }
    }
}

let operator = "";
let num1 = "";
let num2 = "";
let displayValue = "0";

// Add listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // Check which button is pressed
        if (button.className === "operator") {
            operator = button.textContent;
        } else if (button.className === "number") { 
            if (operator === "") { // First number
                num1 += button.textContent;
                displayValue = num1;
            } else { // Second number
                num2 += button.textContent;
                displayValue = num2;
            }
        } else if (button.className === "equals") {
            displayValue = operate(operator, num1, num2); // if num1 = "" it is coerced into 0
            num1 = displayValue;
            num2 = "";
            operator = "";
        } else if (button.className === "all-clear") { 
            allClear();
        } else {
            clear();
        }

        // Update display
        changeDisplay(displayValue);
    })
})

/*
console.log(operate("add", 1, 2));
console.log(operate("subtract", 2, 1));
console.log(operate("multiply", 3, 5));
console.log(operate("divide", 10, 2));
*/

