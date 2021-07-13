import { clearScreen } from "./utilities/clearScreen.js";
import {
    displayNumbers,
    displayOperators,
    displayEqualTo,
} from "./utilities/UpdateDisplay.js";
import { deleteLastValue } from "./utilities/delete.js";
const outputScreen = document.getElementById("input-value");
const inputScreen = document.getElementById("output-value");
const numberButtons = document.getElementsByClassName("data-value");
const operatorButtons = document.getElementsByClassName("data-operator");
const equalToButton = document.getElementById("equalTo");
const allClearButton = document.getElementById("data-deleteAll");
const deleteButton = document.getElementById("data-delete");

allClearButton.addEventListener("click", () =>
    clearScreen(outputScreen, inputScreen, "")
);

deleteButton.addEventListener("click", () => deleteLastValue(outputScreen));

//Display Numbers on Screen
for (const j of numberButtons) {
    j.addEventListener("click", () =>
        displayNumbers(outputScreen, inputScreen, j)
    );
}

//Displaying Operators on Screen
for (const i of operatorButtons) {
    i.addEventListener("click", () =>
        displayOperators(inputScreen, outputScreen, i)
    );
}

equalToButton.addEventListener("click", () =>
    displayEqualTo(inputScreen, outputScreen)
);