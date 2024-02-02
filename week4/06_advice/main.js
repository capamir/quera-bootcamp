import simulatedApi from "./server/server.js";

const adviceContainer = document.querySelector(".advice");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

const generateAdvice = async () => {
  // TODO: implement getting the data from api and return the given data
  // API route: /advice
  return simulatedApi.then((response) => {
    // Check if the response has the expected structure
    return response;
  });
};

btn.addEventListener("click", async () => {
  // TODO: call generateAdvice function
  const adviceData = await generateAdvice();

  if (adviceData) {
    heading.textContent = `ADVICE #${adviceData.id}`;
    adviceContainer.textContent = `"${adviceData.advice}"`;
  }
  console.log(adviceData);
});
