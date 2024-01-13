function fizz_buzz(numbers) {
  //your code here...
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    if (element % 3 === 0 && element % 5 === 0) {
      result += "FizzBuzz";
    } else if (element % 3 === 0) {
      result += "Fizz";
    } else if (element % 5 === 0) {
      result += "Buzz";
    } else {
      result += `${element}`;
    }

    if (i < numbers.length) {
      result += ", ";
    }
  }

  return result;
}

const res = fizz_buzz([1, 2, 3]);
console.log(res);

module.exports = fizz_buzz;
