// use request function to send a fake request to a server
const request = require("./request");

async function checkPerformance(requestCount) {
  let successSum = 0;
  let failureSum = 0;
  let successCount = 0;
  let failureCount = 0;

  // Function to handle a single request and update sums
  async function handleRequest(i) {
    try {
      const response = await request();
      successSum += response;
      successCount += 1;
    } catch (error) {
      failureSum += error;
      failureCount += 1;
    }
  }

  // Create an array of Promises for each request
  const promises = Array.from({ length: requestCount }, (_, i) =>
    handleRequest(i)
  );

  // Execute all promises
  try {
    await Promise.all(promises);

    const successAverage = successCount > 0 ? successSum / successCount : 0;
    const failureAverage = failureCount > 0 ? failureSum / failureCount : 0;
    const performance =
      requestCount > 0
        ? (successCount / (successCount + failureCount)) * 100
        : 0;

    console.log({
      successAverage,
      failureAverage,
      performance,
    });
    return {
      successAverage,
      failureAverage,
      performance,
    };
  } catch (error) {
    console.error(`Error while calculating averages: ${error}`);
  }
}

console.log(checkPerformance(3));

module.exports = checkPerformance;
