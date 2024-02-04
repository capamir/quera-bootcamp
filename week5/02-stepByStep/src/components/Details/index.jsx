const Details = (/*TODO*/) => {
  return (
    <div className="form" data-testid="details">
      <label htmlFor="phone">Phone</label>
      <input data-testid="phone" type="number" name="phone" id="phone" /* TODO */ />
      <label htmlFor="gender">Gender</label>
      <select data-testid="gender" name="gender" id="gender" /* TODO */>
        <option value="" className="select__item" disabled>select your gender</option>
        <option value="Male" className="select__item">Male</option>
        <option value="Female" className="select__item">Female</option>
      </select>
    </div>
  );
};

export default Details;
