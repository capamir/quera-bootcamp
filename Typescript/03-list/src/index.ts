export function analyzeArray(arr: (number | string)[]): string {
  let strings = 0;
  let numbers = 0;
  let sumNumbers = 0;

  for (const element of arr) {
    if (typeof element === "string") {
      ++strings;
    } else if (typeof element === "number") {
      ++numbers;
      sumNumbers += element;
    }
  }

  return `There are ${strings} strings and ${numbers} numbers.The sum of all numbers is ${sumNumbers}.`;
}
