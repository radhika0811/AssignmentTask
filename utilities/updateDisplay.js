import { clearScreen } from "./clearScreen.js";
import { calculateExpression } from "./calculateExpression.js";

let checkConstantOperator = true;
let flag = false;
let previousOperator;
let operator = "";
let result;

export let displayNumbers = (outputScreen, inputScreen, j) => {
    if (operator === "=" && previousOperator === "=") {
        clearScreen(outputScreen, inputScreen);
    }
    if (outputScreen.innerHTML !== "0") {
        outputScreen.innerHTML += j.innerHTML;
        checkConstantOperator = true;
    } else {
        outputScreen.innerHTML = j.innerHTML;
    }
};

export let displayOperators = ( inputScreen, outputScreen, i) => {
    previousOperator = operator;
    operator = i.innerHTML;
    console.log(`previous ${previousOperator}`);
    console.log(`current ${operator}`);
    console.log(previousOperator);

    if (checkConstantOperator) {
        if (inputScreen.innerHTML !== "") {
            flag = true;
            result = calculateExpression(
                inputScreen.innerHTML + outputScreen.innerHTML,
                flag,
                result
            );
            console.log("enterd2");
            console.log(result);
            inputScreen.innerHTML = result + operator;
            outputScreen.innerHTML = "";
            checkConstantOperator = false;
        } else {
            inputScreen.innerHTML = outputScreen.innerHTML + operator;
            outputScreen.innerHTML = "";
            checkConstantOperator = false;
        }
    } else if (previousOperator !== "=") {
        console.log("enterd");
        inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1) + operator;
    } else {
        inputScreen.innerHTML = outputScreen.innerHTML + operator;
        outputScreen.innerHTML = "";
        console.log(result);
    }
};

export let displayEqualTo = ( inputScreen, outputScreen) => {
    previousOperator = "=";
    operator = "=";
    if (checkConstantOperator) {
        inputScreen.innerHTML += outputScreen.innerHTML + "=";
        checkConstantOperator = false;
    }
    result = calculateExpression(inputScreen.innerHTML, flag, result);
    outputScreen.innerHTML = result;
};