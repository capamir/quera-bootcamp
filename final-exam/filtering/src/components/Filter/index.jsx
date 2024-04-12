import { useEffect, useState } from "react";
import Select from "../Form/Select";
import filterData from "../../constants/filters.json";
import { getCourses } from "../../services/courses";

const FilterRows = () => {
  const [courses, setCourses] = useState([]);
  const [filterRows, setFilterRows] = useState([]);

  const handleSelect = (e, id, name) => {
    const value = e.target.value;
    setFilterRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [name]: value } : row))
    );
  };

  const addRow = () => {
    setFilterRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length,
        course: "",
        gender: "",
        age: "",
      },
    ]);
  };

  const removeRow = (id) => {
    setFilterRows((rows) => rows.filter((row) => row.id !== id));
  };

  const submitBtn = (filterRows) => {};

  const handleSubmitBtn = () => {
    submitBtn(filterRows);
  };

  const getCoursesData = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  useEffect(() => {
    getCoursesData();
  }, []);

  return (
    <>
      {filterRows.map((filter) => (
        <div key={filter.id}>
          <div className="filter-row">
            <label htmlFor={filter.id}>کالج</label>
            <Select
              id={filter.id}
              name={filter.name}
              data={courses}
              handleChange={(e) => handleSelect(e, filter.id, "course")}
            />
            <label htmlFor={filter.id}>جنسیت</label>
            <Select
              id={filter.id}
              name={filter.name}
              data={filterData.gender}
              handleChange={(e) => handleSelect(e, filter.id, "gender")}
            />
            <label htmlFor={filter.id}>سن</label>
            <Select
              id={filter.id}
              name={filter.name}
              data={filterData.age}
              handleChange={(e) => handleSelect(e, filter.id, "age")}
            />

            <button
              data-testid="removeRowBtn"
              className="btn btn-remove"
              onClick={filter.id !== 0 ? () => removeRow(filter.id) : () => {}}
            >
              &#10006;
            </button>
          </div>
        </div>
      ))}
      <div className="filter__buttons">
        <button
          className="btn btn-new"
          data-testid="newRowBtn"
          onClick={addRow}
        >
          ردیف جدید
        </button>
        <button
          data-testid="filterBtn"
          className="btn btn-submit"
          onClick={handleSubmitBtn}
        >
          اعمال فیلتر
        </button>
      </div>
    </>
  );
};

export default FilterRows;
