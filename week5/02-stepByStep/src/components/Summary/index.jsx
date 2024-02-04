const Summary = ({ formValues }) => {
  const { firstName, lastName, phone, gender } = formValues;
  return (
    <div className="form" data-testid="summary">
      <p data-testid="firstName">First Name : {firstName}</p>
      <p data-testid="lastName">Last Name : {lastName}</p>
      <p data-testid="phone">Phone : {phone}</p>
      <p data-testid="gender">Gender : {gender}</p>
    </div>
  );
};

export default Summary;
