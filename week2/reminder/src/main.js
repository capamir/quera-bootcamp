// use this tasks to test your code
const tasks = require("./data.json");

function reminder(data, currentDate) {
  // YOUR CODE HERE
  let output = [];
  const currentTime = new Date(data);
  currentDate.forEach((task) => {
    let message = "";
    const taskTime = new Date(task.date);
    const timeDifference = taskTime - currentTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours >= 3) {
      message = `wait fot it : ${task.title}`;
    } else if (hours >= 0) {
      message = `just do it : ${task.title}`;
    } else {
      message = `too late : ${task.title}`;
    }

    output.push(message);
  });
  return output;
}

module.exports = reminder;
