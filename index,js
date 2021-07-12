const numberButton = document.getElementsByClassName("data-value");
const operatorButton = document.getElementsByClassName("data-operator");
const outputScreen = document.getElementById("input-value");
const inputScreen = document.getElementById("output-value");
const equalToButton = document.getElementById('equalTo');
const allClearButton = document.getElementById("data-deleteAll");
const deleteButton = document.getElementById("data-delete");
var check_Concurrent_Operator = true;
var previous_operator;
var operator = "";
var result;

// Displaying Numbers on Screen
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", () => {
        if (operator === "=" && previous_operator === "=") {
            ClearScreen();
        }
        outputScreen.innerHTML += numberButton[i].innerHTML;
        check_Concurrent_Operator = true;
    });
}

//Displaying Operators on Screen
for (let i = 0; i < operatorButton.length; i++) {

    operatorButton[i].addEventListener("click", () => {

        previous_operator = operator;
        operator = operatorButton[i].innerHTML;
        console.log(previous_operator);

        if (check_Concurrent_Operator) {
            inputScreen.innerHTML = outputScreen.innerHTML + operator;
            outputScreen.innerHTML = "";
            check_Concurrent_Operator = false;
        } else if (previous_operator !== "=") {
            inputScreen.innerHTML = (inputScreen.innerHTML).slice(0, -1) + operator;
        } else {
            inputScreen.innerHTML = result + operator;
            outputScreen.innerHTML = "";
        }
    });
}

equalToButton.addEventListener("click", () => {
    previous_operator = "=";
    operator = "=";
    console.log(`previous ${previous_operator}`);
    if (check_Concurrent_Operator) {
        inputScreen.innerHTML += outputScreen.innerHTML + "=";
        check_Concurrent_Operator = false;
    }
    const result = calculateExpression(inputScreen.innerHTML);
    outputScreen.innerHTML = result;

});


//Calculating the given expression
function calculateExpression(expression) {
    let firstNumber = "";
    let secondNumber;
    expression = expression.slice(0, expression.length - 1);
    let i = 0;
    while (isOperator(expression[i]) === false) {
        firstNumber += expression[i];
        i += 1;
    }
    secondNumber = expression.slice(i + 1, expression.length);
    firstNumber = parseFloat(firstNumber,10);
    secondNumber = parseFloat(secondNumber,10);

    switch (check_operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        default:
            break;
    }
    return result;
}

var check_operator;

function isOperator(sign) {
    if (sign === "+" || sign === "-" || sign === "x" || sign === "/") {
        check_operator = sign;
        return true;
    }
    return false;
}

allClearButton.addEventListener("click", ClearScreen);

function ClearScreen() {
    outputScreen.innerHTML = "";
    inputScreen.innerHTML = "";
    previous_operator = "";
}

deleteButton.addEventListener("click", () => {
    outputScreen.innerHTML = (outputScreen.innerHTML).slice(0, -1);
})
