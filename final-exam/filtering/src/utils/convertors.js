export const objectsToQuery = (objects) => {
  return objects
    .map((obj, index) => {
      return Object.entries(obj)
        .filter(([_, value]) => value !== "")
        .map(([key, value]) => `${key}-${index}=${value}`)
        .join("&");
    })
    .join("&");
};
