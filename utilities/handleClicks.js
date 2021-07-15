import { calculateExpression } from "./calculateExpression.js";
import { setInputScreen, setOutputScreen } from "./display.js";


export const handleNumberClick = (calculator, digit) => {
    if (calculator.operator === "") {
        calculator.firstNumber = (calculator.firstNumber * 10) + digit;
    } else if (calculator.operator === "=") {
        calculator.firstNumber = "";
        calculator.operator = "";
        calculator.secondNumber = "";
        setInputScreen(calculator);
        calculator.firstNumber = digit;

    } else {
        calculator.secondNumber = (calculator.secondNumber * 10) + digit;
    }
    return calculator;
}

export const handleOperatorClick = (calculator, sign) => {

    if (calculator.operator !== "" && calculator.secondNumber !== "") {
        calculator = calculateExpression(calculator);
        calculator.firstNumber = calculator.result;
        calculator.operator = sign;
        calculator.secondNumber = "";
        setOutputScreen(calculator);
    } else {
        calculator.operator = sign;
    }
    return calculator;
}


export const handleEqualToClick = (calculator) => {
    calculator = calculateExpression(calculator);
    setInputScreen(calculator);
    calculator.operator = "=";
    calculator.firstNumber = calculator.result;
    setOutputScreen(calculator);
    return calculator;
}