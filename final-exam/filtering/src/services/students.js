import { config } from "../constants/config";

export const getStudents = async (queryString) => {
  const url = `${config.ApiUrl}/students?q=${queryString}`;
  const response = await fetch(url);
  const students = await response.json();
  return students;
};
