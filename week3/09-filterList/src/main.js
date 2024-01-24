// you can use this data to test your function
const list = require("./data.json");

function filterList(data, model_numbers = []) {
  const result = [];

  const brands = Object.keys(data);
  // Iterate through each brand in the data
  brands.forEach((brand) => {
    // Check if the brand has an array of cars
    if (Array.isArray(data[brand])) {
      // Filter the cars based on the model_numbers
      const filteredCars = data[brand].filter((car) =>
        model_numbers.includes(car.model_number)
      );

      // Append the filtered cars to the result array
      result.push(...filteredCars);
    }
  });

  return result.length === 0 ? "not found!" : result;
}

res = filterList(list, ["A6F512", "R754F"]);
console.log(res);

module.exports = filterList;
