const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const deleteBtn = document.querySelector("[data-delete] ");
const equalBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const previousOperandElement = document.querySelector("[data-previousOperand]");
const currentOperandElement = document.querySelector("[data-currentOperand]");

class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    // the if statement prevents typing multiple dots.
    if (number === "." && this.currentOperand.includes(".")) return;
    // to concatinate data-numbers.
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    // Parsefloat: Converting string to a number
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    // checking if prev and current doesn't contain a number then don't do anything!!
    if (isNaN(prev) || isNaN(current)) return;

    // switch statement is just like a bunsh of if statements chained to each other
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      case "%":
        computation = prev % current;
        break;
      default:
        return;
    }
    this.previousOperand = "";
    this.currentOperand = computation;
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation} `;
    }
  }
}

const calculator = new Calculator(
  previousOperandElement,
  currentOperandElement
);

numberBtn.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
