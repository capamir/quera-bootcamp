function findFirstNonRepeated(str) {
  //your code here...
  // Check if myNumber is an integer
  if (Number.isInteger(str)) {
    // Convert the integer to a string
    str = str.toString();
  }

  // Create a map to store character frequencies
  let charMap = {};

  // Iterate through the string to populate the character frequencies
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
    // If charMap[char] is a truthy value, then (charMap[char] || 0) evaluates to charMap[char].
    // If charMap[char] is a falsy value, then (charMap[char] || 0) evaluates to 0.
  }

  // Iterate through the string to find the first character with a frequency of 1
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// console.log(findFirstNonRepeated("mom"));
// console.log(findFirstNonRepeated(12233));
module.exports = findFirstNonRepeated;
