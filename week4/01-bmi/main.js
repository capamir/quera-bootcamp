document.addEventListener("DOMContentLoaded", function () {
  //your code here ....
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", () => {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");

    // Parse height and weight as numbers
    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);
    let message = "";

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
      // Calculate BMI using the formula: BMI = weight / (height * height)
      const bmiFormula = weight / (height * height);
      const bmi = bmiFormula.toFixed(2);
      console.log(bmi);
      message = `نتیجه تست شما: ${bmi} `;
      if (bmi < 18.5) {
        message += "(کمبود وزن)";
      } else if (bmi < 25) {
        message += "(وزن سلامت)";
      } else if (bmi < 30) {
        message += "(اضافه وزن)";
      } else if (bmi >= 30) {
        message += "(چاقی)";
      }
    } else {
      message = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
    }

    const result = document.getElementById("result");
    result.innerHTML = message;
  });
});
