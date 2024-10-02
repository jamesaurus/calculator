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
    const display = document.querySelector(".display");
    display.innerHTML = value;
}

function allClear() {
    operator = [];
    num1 = [];
    num2 = [];
    displayValue = "0";
    changeDisplay(displayValue);
}

function clear() {
    // Check if user is inputting first or second value
    if (operator.length === 0) {
        if (num1.length >= 2) {
            num1.pop();
            displayValue = num1.join("");
        } else {
            num1.pop();
            displayValue = "0";
        }
        console.log(num1);
    } else {
        if (num2.length >= 2) {
            num2.pop();
            displayValue = num2.join("");
        } else {
            num2.pop();
            displayValue = "0";
        }
    }
}

function equals() {
    displayValue = operate(operator[0], num1.join(""), num2.join(""));
    num1 = displayValue.toString().split("");
    num2 = [];
    operator.pop();
}

let operator = [];
let num1 = [];
let num2 = [];
let displayValue = "";

// Add listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // Check which button is pressed
        switch(button.className) {
            case "decimal":
            case "number":
                // Check if user is inputting first or second value
                if (operator.length === 0) {
                    num1.push(button.textContent);
                    displayValue = num1.join("");
                } else {
                    num2.push(button.textContent);
                    displayValue = num2.join("");
                }
                console.log(num1);
                console.log(num2);
                break;
            case "operator":
                if (operator.length === 0) {
                    operator.push(button.textContent);
                }

                // Evaluate the expression if both values and operator are given
                // and another operator is given without pressing equals
                if (operator.length === 1 && num2.length > 0) {
                    equals();
                    operator.push(button.textContent);
                }

                console.log(operator);
                break;
            case "equals":
                equals();
                console.log(num1, num2);
                break;
            case "clear":
                clear();
                break;
            case "all-clear":
                allClear();
                break;
        }
        changeDisplay(displayValue);
    })
})
