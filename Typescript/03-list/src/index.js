"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeArray = void 0;
function analyzeArray(arr) {
  var strings = 0;
  var numbers = 0;
  var sumNumbers = 0;
  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var element = arr_1[_i];
    if (typeof element === "string") {
      ++strings;
    } else if (typeof element === "number") {
      ++numbers;
      sumNumbers += element;
    }
  }
  return "There are "
    .concat(strings, " strings and ")
    .concat(numbers, " numbers.The sum of all numbers is ")
    .concat(sumNumbers, ".");
}
exports.analyzeArray = analyzeArray;

console.log(analyzeArray([1, 2, 3, "s", "d", 4]));
