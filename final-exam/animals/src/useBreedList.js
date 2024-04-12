import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      try {
        setBreedList([]);
        setloading(true);
        const res = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = await res.json();
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
      } catch (error) {
        setError(true);
      } finally {
        setloading(false);
      }
    }
  }, [animal]);

  return [breedList, loading, error];
}
