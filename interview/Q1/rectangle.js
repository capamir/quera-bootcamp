// Calculates the total number of rectangles that can be formed
// in a grid of dimensions M x N.
const rectangle = (M, N) => {
  const rectangles = ((M * (M + 1)) / 2) * ((N * (N + 1)) / 2);
  // For all possible pairs of horizontal and vertical lines in the grid,
  // we count the number of rectangles that can be formed using these lines.
  // The total number of rectangles is the sum of all such counts.
  return rectangles;
};
