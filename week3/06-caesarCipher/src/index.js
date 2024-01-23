function caesarCipher(message, shift) {
  // YOUE CODE HERE
  // Ensure shift is within the range of 0 to 25
  shift = shift % 26;

  // Convert the string to an array of characters
  const charArray = message.split("");

  // Iterate through charArray
  const encryptedArray = charArray.map((char) => {
    if (/[a-zA-Z]/.test(char)) {
      // Determine if the letter is uppercase or lowercase
      const isUpperCase = char === char.toUpperCase();

      // Convert the letter to its ASCII code
      let charCode = char.charCodeAt(0);

      // Apply the Caesar Cipher shift
      charCode = isUpperCase
        ? ((charCode - 65 + shift) % 26) + 65
        : ((charCode - 97 + shift) % 26) + 97;

      // Convert the ASCII code back to a character
      return String.fromCharCode(charCode);
    }

    // non-alphabetic characters will be unchanged
    return char;
  });

  // Join the array back into a string
  return encryptedArray.join("");
}

// Example usage:
const plaintext = "SAD va BIST va YEK, SAD...";
const encryptedText = caesarCipher(plaintext, 3);
console.log("VDG yd ELVW yd BHN, VDG..." === encryptedText);
console.log(encryptedText);

module.exports = caesarCipher;
