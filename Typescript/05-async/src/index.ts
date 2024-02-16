import { fetchData } from "./fetchData";

export async function safeFetch(): Promise<string> {
  // your code ...
  try {
    const value = await fetchData();
    return value;
  } catch (error) {
    return "error occurred";
  }
}
