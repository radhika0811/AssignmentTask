import calculateExpression from "./calculateExpression.js";
import { setInputScreen, setOutputScreen } from "./display.js";

const handleNumberClick = (calculator, digit) => {
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
}

const handleOperatorClick = (calculator, sign) => {

    if (calculator.operator !== "" && calculator.secondNumber !== "") {
        try {
            calculateExpression(calculator);
        } catch (err) {
            calculator.result = 0;
            console.log("exception handled");
        }
        calculator.firstNumber = calculator.result;
        calculator.operator = sign;
        calculator.secondNumber = "";
        setOutputScreen(calculator);
    } else {
        calculator.operator = sign;
    }
}


const handleEqualToClick = (calculator) => {
    try {
        calculateExpression(calculator);
    } catch (err) {
        calculator.result = 0;
        console.log("exception handled");
    }
    setInputScreen(calculator);
    calculator.operator = "=";
    calculator.firstNumber = calculator.result;
    setOutputScreen(calculator);
}
export { handleNumberClick, handleEqualToClick, handleOperatorClick };