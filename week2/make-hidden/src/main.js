// you can use this data to test your code
const data = require("./data.json");

function makeHidden(data) {
  data.forEach((element) => {
    // YOUR CODE HERE
    // Mobile modifier
    let mobile = element.details.mobile;

    // Convert the string to an array for easy manipulation
    let stringArray = mobile.split("");

    // Replace characters at positions 7 to 9 with '*'
    stringArray.splice(6, 3, "*", "*", "*");

    // Join the array back into a string
    let modifiedMobile = stringArray.join("");

    element.details.mobile = modifiedMobile;
    // Card modifier
    let card_no = element.details.card_no;

    let modifiedCard = "****-****-****-" + card_no.slice(-4);

    element.details.card_no = modifiedCard;

    element.is_secure = true;
  });
  return data;
}

// const res = makeHidden();
// console.log(res);

module.exports = makeHidden;
