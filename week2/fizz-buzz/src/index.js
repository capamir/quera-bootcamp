function fizz_buzz(numbers) {
  //your code here...
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    if (element % 3 === 0 && element % 5 === 0) {
      result += "fizzbuzz";
    } else if (element % 3 === 0) {
      result += "fizz";
    } else if (element % 5 === 0) {
      result += "buzz";
    } else {
      result += `${element}`;
    }
    if (numbers.length > 1) {
      if (i < numbers.length) {
        result += ", ";
      }
    }
  }

  return result;
}

const res = fizz_buzz([3]);
console.log(res);

module.exports = fizz_buzz;
