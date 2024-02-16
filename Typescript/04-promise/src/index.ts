import { fetchData } from "./fetchData";

export async function doubleAndAdd(): Promise<number> {
  // your code ...
  const firstResponse = await fetchData();
  const secondResponse = await fetchData();
  return 2 * firstResponse + secondResponse;
}
