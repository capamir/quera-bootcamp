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
      message = `wait for it : ${element.title}`;
    } else if (hours >= 0) {
      message = `just do it : ${element.title}`;
    } else {
      message = `too late : ${element.title}`;
    }
    messages.push(message);
  });

  return messages;
}

const result = reminder(
  [
    {
      id: 1,
      title: "buy for breakfast",
      description: "buy a bread for breakfast",
      date: "2024-01-15T20:00:00Z",
    },
    {
      id: 2,
      title: "job interview",
      description: "join meeting for a job interview",
      date: "2023-12-16T14:30:00Z",
    },
    {
      id: 3,
      title: "add features",
      description: "add new features client ask",
      date: "2024-11-23T15:23:00Z",
    },
  ],
  "2024-01-15T18:00:00Z"
);
console.log(result);

module.exports = reminder;
