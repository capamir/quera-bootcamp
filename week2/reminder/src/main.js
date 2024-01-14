// use this tasks to test your code
const tasks = require("./data.json");

function reminder(data, currentDate) {
  // YOUR CODE HERE
  let messages = [];

  const currentTime = new Date(currentDate);
  data.forEach((element) => {
    let message = "";
    const taskTime = new Date(element.date);
    const timeDifference = taskTime - currentTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours >= 3) {
      message = `wait fot it : ${element.title}`;
    } else if (hours >= 0) {
      message = `just do it : ${element.title}`;
    } else {
      message = `too late : ${element.title}`;
    }
    messages.push(message);
  });

  return messages;
}

const result = reminder(tasks, "2024-01-15T18:00:00Z");
console.log(result);

module.exports = reminder;
