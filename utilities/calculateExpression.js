export const calculateExpression = (calculator) => {
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
                try {
                    throw 'Division By Zero Error';
                } catch (err) {
                    console.log('caught error');
                } finally {
                    calculator.result = 0;
                }
            } else {
                calculator.result = calculator.firstNumber / calculator.secondNumber;
            }
            break;
        default:
            break;
    }
    return calculator;
}