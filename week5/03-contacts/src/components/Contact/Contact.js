import React from "react";

const Contact = () => {
  return (
    <div data-testid="contact" className="contacts-list__item">
      <div>
        <h2 data-testid="fName">First Name: {/* first name */}</h2>
        <h2 data-testid="lName">Last Name: {/* last name */}</h2>
      </div>

      <div>
        <span data-testid="email" className="email">
          {/* email */}
        </span>
      </div>

      <div>
        <p data-testid="city">City: {/* city */}</p>
        <input
          data-testid="checkbox"
          type="checkbox"
          // add needed props
        />
      </div>
    </div>
  );
};

export default Contact;
