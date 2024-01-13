function fizz_buzz(numbers) {
  //your code here...
  let message = "";
  numbers.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      message += "FizzBuzz";
    } else if (element % 3 === 0) {
      message += "Fizz";
    } else if (element % 5 === 0) {
      message += "Buzz";
    }
  });
  return message;
}

module.exports = fizz_buzz;
