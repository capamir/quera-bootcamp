import { useEffect } from "react";
import Student from "./Student";
import FilterRows from "../Filter";

const Students = () => {
  // create state to store students data received from server

  const getStudentsData = async (queryString = "") => {
   
  };

  const handleSubmitBtn = (filterRows) => {

  };

  useEffect(() => {
    getStudentsData();
  }, []);

  return (
    <div className="main">
      <div className="filter">
        <FilterRows submitBtn={handleSubmitBtn} />
      </div>
      <div className="list" data-testid="students-list">
        {students.length > 0 ? (
          students.map((student, index) => (
            <Student rowNumber={index} />
          ))
        ) : (
          <p>موردی یافت نشد!</p>
        )}
      </div>
    </div>
  );
};

export default Students;
