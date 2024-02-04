const Details = ({ formValues, onChangeValues }) => {
  return (
    <div className="form" data-testid="details">
      <label htmlFor="phone">Phone</label>
      <input
        data-testid="phone"
        type="number"
        name="phone"
        id="phone" /* TODO */
        value={formValues.phone}
        onChange={onChangeValues}
      />
      <label htmlFor="gender">Gender</label>
      <select
        data-testid="gender"
        name="gender"
        id="gender"
        /* TODO */ value={formValues.gender}
        onChange={onChangeValues}
      >
        <option value="" className="select__item" disabled>
          select your gender
        </option>
        <option value="Male" className="select__item">
          Male
        </option>
        <option value="Female" className="select__item">
          Female
        </option>
      </select>
    </div>
  );
};

export default Details;
