// Function to find non-sequential numbers in an array
// Time complexity: O(N) where N is the length of the input array
const findNonSequentialNumber = (arr) => {
  // Calculate the common difference between
  const commonDifference = arr[1] - arr[0];

  // Iterate through each element (except the last one)
  for (let i = 1; i < arr.length - 1; i++) {
    // Check if the difference between consecutive elements is not equal to the common difference
    if (arr[i + 1] - arr[i] !== commonDifference) {
      // Return missing number
      return arr[i] + commonDifference;
    }
  }
};

// Example usage:
const sequence = [2, 4, 6, 10, 12, 14];
const result = findNonSequentialNumber(sequence);
console.log(result); // Output: 8
