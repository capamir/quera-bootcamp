import { config } from "../constants/config";

export const getCourses = async () => {
  const url = `${config.ApiUrl}/courses`;
  const response = await fetch(url);
  const courses = await response.json();
  return courses.courses;
};
