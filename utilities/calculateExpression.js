let checkOperator;
const isOperator = (sign) => {
    if (sign === "+" || sign === "-" || sign === "x" || sign === "/") {
        checkOperator = sign;
        return true;
    }
    return false;
};

//Calcualting the given expression
export const calculateExpression = (expression, flag, result) => {
    let firstNumber = "";
    let secondNumber;
    if (!flag) {
        expression = expression.slice(0, -1);
    }
    let i = 0;
    while (isOperator(expression[i]) === false) {
        firstNumber += expression[i];
        i += 1;
    }
    secondNumber = expression.slice(i + 1, expression.length);
    firstNumber = parseFloat(firstNumber, 10);
    secondNumber = parseFloat(secondNumber, 10);

    switch (checkOperator) {
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
};