function palindrome(input) {
  // YOUR CODE HERE
  const ascci = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  // Check if myNumber is an integer
  if (Number.isInteger(input)) {
    // Convert the integer to a string
    input = input.toString();
  }
  // converting all characters into lower case and removing spaces
  input = input.toLowerCase();
  input = input.replaceAll(" ", "");
  // creating list of characters from input variable
  const inputList = input.split("");
  // looping into input list to select only ascci letters from ascci list
  let inputString = "";
  inputList.forEach((ch) => {
    for (let i = 0; i < ascci.length; i++) {
      if (ch === ascci[i]) {
        inputString += ch;
        break;
      }
    }
  });

  const reverseInput = inputString.split("").reverse().join("");

  if (inputString === reverseInput) {
    return true;
  }

  return false;
}

const res = palindrome("Madam I’m Adam");
console.log(res);

module.exports = palindrome;
