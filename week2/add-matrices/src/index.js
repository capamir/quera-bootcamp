function addMatrices(matrix1, matrix2) {
  // your code...
  const resultMatrix = Array.from({ length: 4 }, () => Array(4).fill(0));

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return resultMatrix;
}

module.exports = addMatrices;
