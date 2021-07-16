const deleteLastValue = (calculator) => {
    if (calculator.secondNumber !== "" && calculator.operator !== "=") {
        calculator.secondNumber = parseInt(calculator.secondNumber / 10, 10);
    } else {
        calculator.firstNumber = parseInt(calculator.firstNumber / 10, 10);
    }
};
export default deleteLastValue;