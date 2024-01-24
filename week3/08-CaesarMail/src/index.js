function toRoamn(number) {
  // YOUR CODE HERE
  function calc(cond, ...Romansymbols) {
    const symbols = [...Romansymbols];
    // Use conditional statements to determine the Roman numeral component based on the condition.
    return cond > 0
      ? cond === 9
        ? symbols[0]
        : cond >= 5
        ? symbols[1] + symbols[2].repeat(cond - 5)
        : cond === 4
        ? symbols[3]
        : symbols[4].repeat(cond)
      : "";
  }

  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  return (
    (thousands > 0 ? "M".repeat(thousands) : "") +
    calc(hundreds, "CM", "D", "C", "CD", "C") +
    calc(tens, "XC", "L", "X", "XL", "X") +
    calc(ones, "IX", "V", "I", "IV", "I")
  );
}

const result = toRoamn(4);
console.log(result); // Output: 'MCDXCV'

module.exports = toRoamn;
