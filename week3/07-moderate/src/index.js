function moderate(arr1, arr2, arr3) {
  // YOUR CODE HERE
  // combine three arrays to one
  const combinedArray = [...arr1, ...arr2, ...arr3];

  // Calculate the average
  const sumOfArr = combinedArray.reduce((sum, num) => sum + num, 0);
  const arrLength = combinedArray.length;
  let average = sumOfArr / arrLength;
  average = Math.floor(average * 100) / 100;

  // Calculate the median
  // Create a copy of combinedArray arr to implement sort function without changing combinedArray's arangement
  const sortedArray = combinedArray.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(arrLength / 2);
  const median =
    arrLength % 2 === 0
      ? (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2
      : sortedArray[middleIndex];

  // Calculate the mode
  const frequencyObj = {};
  let maxFrequency = 0;
  let modes = [];

  combinedArray.forEach((num) => {
    frequencyObj[num] = (frequencyObj[num] || 0) + 1;

    if (frequencyObj[num] > maxFrequency) {
      maxFrequency = frequencyObj[num];
      modes = [num];
    } else if (frequencyObj[num] === maxFrequency) {
      modes.push(num);
    }
  });

  // Return the result as an object
  return {
    Average: parseFloat(average),
    Median: median,
    Mode: modes.length === 1 ? modes[0] : Math.max(...modes),
  };
}

const result = moderate([5, 8, 10], [8], [5, 10]);
console.log(result);

module.exports = moderate;
