const englishCode = "en-US";
const spanishCode = "es-ES";
const iranianCode = "fa-IR";

function getAboutUsLink(language) {
  //your code here...
  let message = "";
  if (language === englishCode) {
    message = "/about-us";
  } else if (language === spanishCode) {
    message = "/acerca-de";
  } else if (language === iranianCode) {
    message = "/درباره-ما";
  }
  return message;
}

module.exports = getAboutUsLink;
