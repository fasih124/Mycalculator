function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      if (b === 0) {
        return alert("Cannot Divide By Zero");
      } else {
        return Math.toFixed(divide(a, b));
      }

      break;
    default:
      console.log("error");
      break;
  }
}
