const Select = ({ id, name, data, handleChange }) => {
  return (
    <>
      <select
        data-testid={name}
        name={name}
        id={id}
        className="filter-row__item"
        onChange={handleChange}
      >
        <option value="">همه</option>
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
