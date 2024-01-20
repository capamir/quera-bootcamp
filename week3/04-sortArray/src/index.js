function doubleSort(...numbers) {
  // Todo ...
  const ascending = [...numbers].sort((a, b) => a - b);
  const descending = [...numbers].sort((a, b) => b - a);

  return {
    ascending,
    descending,
  };
}

const result = doubleSort(
  1,
  234,
  3,
  4,
  8,
  6,
  10,
  9,
  -1,
  20,
  121,
  123,
  122,
  122
);
console.log(result);

module.exports = doubleSort;
