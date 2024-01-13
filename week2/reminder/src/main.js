// use this tasks to test your code
// const tasks = require("./data.json");

function reminder(data, currentDate) {
  // YOUR CODE HERE
  const currentTime = new Date(data);
  let message = "";
  const taskTime = new Date(currentDate.date);
  const timeDifference = taskTime - currentTime;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  if (hours >= 3) {
    message = `wait fot it : ${currentDate.title}`;
  } else if (hours >= 0) {
    message = `just do it : ${currentDate.title}`;
  } else {
    message = `too late : ${currentDate.title}`;
  }

  return message;
}

const result = reminder("2024-01-15T18:00:00Z", {
  id: 1,
  title: "buy for breakfast",
  description: "buy a bread for breakfast",
  date: "2024-01-15T20:00:00Z",
});
console.log(result);

module.exports = reminder;
