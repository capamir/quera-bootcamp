const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const btn = document.getElementById("submit__btn");
const yearsResult = document.getElementById("date__years--result");
const monthsResult = document.getElementById("date__months--result");
const daysResult = document.getElementById("date__days--result");
const errorContainer = document.querySelector(".error");

const initialState = {
  year: 0,
  month: 0,
  day: 0,
};

dayInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.day = e.target.value;
});

monthInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.month = e.target.value;
});

yearInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.year = e.target.value;
});

const calculateAge = (dateOfBirth) => {
  const { day, month, year } = dateOfBirth;
  const result = [];

  // TODO: calculate year of age, month of age and date of age
  //  and return result array with this scheme => ['year', 'month', 'day']
  // your code here...
  // Get the current date
  const currentDate = new Date();

  // Create a Date object for the birth date
  const birthDate = new Date(year, month - 1, day);

  // Calculate the age in years, months, and days
  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  // Adjust for negative ageMonths (current month is before birth month) or negative ageDays (current day is before birth day)
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  // Adjust for negative ageDays (current day is before birth day)
  if (ageDays < 0) {
    const lastMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageDays += lastMonthDays;
    ageMonths--;
  }

  return [ageYears, ageMonths, ageDays];
};

btn.addEventListener("click", () => {
  console.log(initialState);

  if (
    initialState.day &&
    initialState.month &&
    initialState.year &&
    initialState.month <= 12 &&
    initialState.day <= 31
  ) {
    const result = calculateAge(initialState);
    yearsResult.textContent = result[0];
    monthsResult.textContent = result[1];
    daysResult.textContent = result[2];
  } else {
    errorContainer.innerHTML = `<p>Input is invalid!</p>`;
    errorContainer.style.setProperty("display", "block");
    setTimeout(() => {
      errorContainer.style.setProperty("display", "none");
    }, 1500);
  }
});
