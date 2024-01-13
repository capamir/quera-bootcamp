function arrayEquality(arr1, arr2) {
  // check if arrays' length are equal or not
  if (arr1.length !== arr2.length) {
    return false;
  }

  //   compare elements of arr1 with elements of arr2
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    const element2 = arr2[i];

    if (Array.isArray(element1) && Array.isArray(element2)) {
      // Recursively check nested arrays
      if (!arrayEquality(element1, element2)) {
        return false;
      }
    } else if (element1 !== element2) {
      return false;
    }
  }

  return true;
}

function objectEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // check if object's length are equal or not
  if (keys1.length !== keys2.length) {
    return false;
  }

  //   compare elements of arr1 with elements of arr2
  for (const key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === "object" && typeof value2 === "object") {
      // Recursively check nested objects
      if (!objectEquality(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

module.exports = { arrayEquality, objectEquality };
