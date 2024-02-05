const Information = ({ formValues, onChangeValues }) => {
  return (
    <div className="form" data-testid="informations">
      <label htmlFor="firstName">First Name</label>
      <input
        data-testid="firstName"
        type="text"
        name="firstName"
        id="firstName" /* TODO */
        value={formValues?.firstName}
        onChange={onChangeValues}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        data-testid="lastName"
        type="text"
        name="lastName"
        id="lastName" /* TODO */
        value={formValues?.lastName}
        onChange={onChangeValues}
      />
    </div>
  );
};

export default Information;
