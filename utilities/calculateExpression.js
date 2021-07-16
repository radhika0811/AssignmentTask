const calculateExpression = (calculator) => {
    switch (calculator.operator) {
        case '+':
            calculator.result = calculator.firstNumber + calculator.secondNumber;
            break;
        case '-':
            calculator.result = calculator.firstNumber - calculator.secondNumber;
            break;
        case 'x':
            calculator.result = calculator.firstNumber * calculator.secondNumber;
            break;
        case '/':
            if (calculator.secondNumber === 0) {
                throw 'Division By Zero Error';
            } else {
                calculator.result = calculator.firstNumber / calculator.secondNumber;
            }
            break;
        default:
            break;
    }
}
export default calculateExpression;