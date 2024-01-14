function palindrome(input) {
  // YOUR CODE HERE
  // Check if myNumber is an integer
  if (Number.isInteger(input)) {
    // Convert the integer to a string
    input = input.toString();
  }
  input = input.toLowerCase();
  input = input.replaceAll("!", "");
  input = input.replaceAll("’", "");
  input = input.replaceAll(",", "");
  input = input.replaceAll(" ", "");

  const reverseInput = input.split("").reverse().join("");

  console.log(input);
  console.log(reverseInput);

  if (input === reverseInput) {
    return true;
  }

  return false;
}

const res = palindrome("Madam I’m Adam");
console.log(res);

module.exports = palindrome;
