export const deleteLastValue = (outputScreen) => {
    outputScreen.innerHTML = outputScreen.innerHTML.slice(0, -1);
};