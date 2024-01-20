function filterByTerm(inputArr, searchTerm) {
  //your code here...
  if (typeof searchTerm === "undefined")
    return "searchTerm cannot be empty at filterByTerm";

  const filteredLinks = inputArr.filter((link) =>
    link.url.includes(searchTerm)
  );
  return filteredLinks;
}

const linksList = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" },
];

const searchTerm = "url";
const result = filterByTerm(linksList, searchTerm);
console.log(result);
module.exports = filterByTerm;
