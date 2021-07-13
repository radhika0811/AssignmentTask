export const clearScreen = (outputScreen, inputScreen, previousOperator) => {
    outputScreen.innerHTML = "0";
    inputScreen.innerHTML = "";
    previousOperator = "";
};