export const setInputScreen = (calculator) => {
    const inputScreen = document.getElementById("output-value");
    if (calculator.operator !== "=")
        inputScreen.innerHTML = calculator.expression(
            calculator.firstNumber,
            calculator.secondNumber,
            calculator.operator
        );
};

export const setOutputScreen = (calculator) => {
    const outputScreen = document.getElementById("input-value");
    if (calculator.operator === "" || calculator.operator === "=")
        outputScreen.innerHTML = calculator.firstNumber;
    else outputScreen.innerHTML = calculator.secondNumber;
};