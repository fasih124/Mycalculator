// variables
let data = [];
let operators = [];
let value = [];
let maxlength = 16;
let ans = 0;

// DOM variables
let screen = document.querySelector(".result");
const buttons = document.querySelectorAll(".button");
const remove = document.querySelector(".button-remove");
const clearScreen = document.querySelector(".button-clear");
const decimal = document.querySelector(".decimal");
// functions

function resetvalue() {
  value = [];
  data = [];
  operators = [];
  screen.textContent = value;
}

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
        break;
      } else if (b < a) {
        return divide(a, b).toFixed(2);
        break;
      } else {
        return divide(a, b).toFixed(16);
        break;
      }
    default:
      return alert("error");
      break;
  }
}

// Populate data
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "+") {
      data.push(Number(value.join("")));
      value = [];
      operators.push("+");
      decimal.disabled = false;
    } else if (button.textContent === "=") {
      data.push(Number(value.join("")));
      let datalength = data.length - 1;
      if (
        operators.length !== datalength ||
        operators.length == 0 ||
        datalength === 0
      ) {
        alert("Syntax Error");
        resetvalue();
      } else if (operators.length === datalength) {
        for (let i = 0; data.length !== 1; i++) {
          ans = operate(operators[0], data[0], data[1]);
          operators.shift();
          data.shift();
          data.shift();
          data.unshift(ans);
        }
      }
      decimal.disabled = false;
    } else if (button.textContent === "/") {
      data.push(Number(value.join("")));
      value = [];
      operators.push("/");
      decimal.disabled = false;
    } else if (button.textContent === "-") {
      data.push(Number(value.join("")));
      value = [];
      operators.push("-");
      decimal.disabled = false;
    } else if (button.textContent === "*") {
      data.push(Number(value.join("")));
      value = [];
      operators.push("*");
      decimal.disabled = false;
    } else {
      value.push(`${button.textContent}`);
    }
    // making value not to overflow  data remian till maxlenght=16;
    if (value.length <= maxlength) {
      screen.textContent = value.join("");
    } else {
      screen.textContent = value.slice(value.length - maxlength).join("");
    }
    // display ans
    if (button.textContent === "=") {
      value = [ans];
      screen.textContent = data.join("");
      data = [];
    }
  });
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
    case "Enter":
      if (e.key === "+") {
        data.push(Number(value.join("")));
        value = [];
        operators.push("+");
        decimal.disabled = false;
      } else if (e.key === "=" || e.key === "Enter") {
        data.push(Number(value.join("")));
        let datalength = data.length - 1;
        if (
          operators.length !== datalength ||
          operators.length == 0 ||
          datalength === 0
        ) {
          alert("Syntax Error");
          resetvalue();
        } else if (operators.length === datalength) {
          for (let i = 0; data.length !== 1; i++) {
            ans = operate(operators[0], data[0], data[1]);
            operators.shift();
            data.shift();
            data.shift();
            data.unshift(ans);
          }
        }
      } else if (e.key === "/") {
        data.push(Number(value.join("")));
        value = [];
        operators.push("/");
      } else if (e.key === "-") {
        data.push(Number(value.join("")));
        value = [];
        operators.push("-");
      } else if (e.key === "*") {
        data.push(Number(value.join("")));
        value = [];
        operators.push("*");
      } else {
        value.push(`${e.key}`);
      }
      // making value not to overflow  data remian till maxlenght=16;
      if (value.length <= maxlength) {
        screen.textContent = value.join("");
      } else {
        screen.textContent = value.slice(value.length - maxlength).join("");
      }
      // display ans
      if (e.key === "=" || e.key === "Enter") {
        value = [ans];
        screen.textContent = data.join("");
        data = [];
      }
      break;
    case "Backspace":
      value.pop();
      screen.textContent = value.join("");
      break;
    case "Escape":
      resetvalue();
      break;
    default:
      break;
  }
});

// clear data
clearScreen.addEventListener("click", resetvalue);

//remove item
remove.addEventListener("click", () => {
  value.pop();
  screen.textContent = value.join("");
});

decimal.addEventListener("click", () => {
  value.push(`${decimal.textContent}`);
  screen.textContent = value.join("");
  decimal.disabled = true;
});
