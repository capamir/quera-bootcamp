import React from "react";

const Contact = ({ person, selected, onCheck }) => {
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    onCheck(person.id, isChecked);
  };
  return (
    <div data-testid="contact" className="contacts-list__item">
      <div>
        <h2 data-testid="fName">First Name: {person.first_name}</h2>
        <h2 data-testid="lName">Last Name: {person.last_name}</h2>
      </div>

      <div>
        <span data-testid="email" className="email">
          {person.email}
        </span>
      </div>

      <div>
        <p data-testid="city">City: {person.city}</p>
        <input
          data-testid="checkbox"
          type="checkbox"
          // add needed props
          checked={selected}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default Contact;
