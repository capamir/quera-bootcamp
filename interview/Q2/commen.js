// Function to find duplicates in an array
// Time complexity: O(N^2) where N is the length of the input array
const findDuplicateOn2 = (arr) => {
  // Initialize an empty list to store duplicate elements
  let duplicateList = [];

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Compare the current element with all subsequent elements
    for (let j = i + 1; j < arr.length; j++) {
      // If two elements are equal (a duplicate is found)
      if (arr[i] === arr[j]) {
        // Add the duplicate element to the list
        duplicateList.push(arr[i]);
      }
    }
  }

  // If any duplicates are found, return the list of duplicates
  if (duplicateList.length > 0) return duplicateList;
  // else, return a message
  return "No duplicates found";
};

// Function to find duplicates in an array using a set-based approach
// Time complexity: O(N) where N is the length of the input array
const findDuplicateOn = (arr) => {
  // Create a set to store unique elements encountered so far
  const set = new Set();

  // Create a set to store duplicate elements
  const duplicates = new Set();

  // Iterate through each element in the array
  for (const num of arr) {
    if (set.has(num)) {
      // If the element is already in the set, it's a duplicate
      duplicates.add(num);
    }
    // else add the element to the set
    set.add(num);
  }

  // If any duplicates are found, return the set of duplicates
  if (duplicates.size > 0) return duplicates;

  // else, return a message
  return "No duplicates found";
};

// Example usage:
const numbers = [2, 10, 10, 100, 2, 10, 11, 2, 11, 2];
console.log(findDuplicateOn(numbers)); // Output: Set { 10, 2, 11 }

// Example usage:
console.log(findDuplicateOn2(numbers)); // Output: Duplicate number is 10
