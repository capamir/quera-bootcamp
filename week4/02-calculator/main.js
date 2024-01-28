document.addEventListener("DOMContentLoaded", () => {
  // your code here......
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = "";
  let operator = "";
  let firstOperand = null;
  display.value = "0";

  buttons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button));
  });

  function handleButtonClick(button) {
    const buttonValue = button.dataset.value;
    if (buttonValue !== undefined) {
      if (!isNaN(buttonValue) || buttonValue === ".") {
        currentInput += buttonValue;
      } else {
        // If the button is an operator
        if (firstOperand !== null) {
          currentInput = firstOperand;
        }
        handleOperator(buttonValue);
      }
    } else {
      // If the button does not have a data-value attribute
      if (button.id === "clearBtn") {
        // If the button is the clear button
        clearCalculator();
      } else if (button.id === "equalsBtn") {
        // If the button is the equals button
        calculateResult();
      }
    }

    updateDisplay();
  }

  function clearCalculator() {
    currentInput = "";
    operator = "";
    firstOperand = null;
  }

  function handleOperator(operatorValue) {
    if (currentInput !== "") {
      if (firstOperand === null) {
        // If there is no previous operand, set the current input as the first operand
        firstOperand = parseFloat(currentInput);
      } else {
        // If there is a previous operand, perform the calculation
        calculateResult();
      }

      operator = operatorValue;
      currentInput = "";

      // Update display with the result of the current operation
      updateDisplay();
    }
  }

  function calculateResult() {
    if (currentInput !== "") {
      const secondOperand = parseFloat(currentInput);

      switch (operator) {
        case "+":
          firstOperand += secondOperand;
          break;
        case "-":
          firstOperand -= secondOperand;
          break;
        case "*":
          firstOperand *= secondOperand;
          break;
        case "/":
          console.log(secondOperand);
          if (secondOperand !== 0) {
            firstOperand /= secondOperand;
          } else {
            firstOperand = "Error";
          }
          break;
        default:
          break;
      }

      // Reset the operator to an empty string
      operator = "";
      currentInput = "";

      // Update the display with the result
      updateDisplay();
    }
  }

  function updateDisplay() {
    display.value =
      currentInput !== ""
        ? currentInput
        : firstOperand !== null
        ? firstOperand
        : "0";
  }
});
