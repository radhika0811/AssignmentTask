  let clearScreen = "";
  export default clearScreen = (calculator) => {
      calculator.firstNumber = "";
      calculator.secondNumber = "";
      calculator.operator = "";
      calculator.result = ""
      return calculator;
  };