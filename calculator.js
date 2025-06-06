const operator = prompt("Enter operator ( +, -, *, / ):");
const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter second number:"));

let result;

switch (operator) {
  case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case '/':
    if (number2 !== 0) {
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
    break;
  default:
    console.log("Invalid operator");
}
