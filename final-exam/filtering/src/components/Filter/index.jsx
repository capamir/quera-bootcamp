import { useEffect } from "react";

const FilterRows = ({ }) => {
  // create state to store courses received from server
  // create state to store filterRows (array of objects)

  // a filter row object
  // {
  //   id: 1,
  //   course: "",
  //   gender: "",
  //   age: ""
  // }

  const handleSelect = (e) => {

  };

  const addRow = () => {

  };

  const removeRow = (id) => {

  };

  const handleSubmitBtn = () => {
    submitBtn(filterRows);
  };

  const getCoursesData = async () => {

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
            {/* use Select component here */}
            <label htmlFor={filter.id}>جنسیت</label>
            {/* use Select component here */}
            <label htmlFor={filter.id}>سن</label>
            {/* use Select component here */}
            <button
              data-testid="removeRowBtn"
              className="btn btn-remove"
              onClick={() => removeRow(filter.id)}
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
