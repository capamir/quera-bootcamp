import { useState } from "react";
import "./App.css";
import Information from "./components/Informations";
import Details from "./components/Details";
import Summary from "./components/Summary";

function App() {
  // TODO declate step state using useState
  const [step, setStep] = useState(1);

  // TODO declare formValues state using useState
  // {
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   gender: "",
  // }
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
  });

  // TODO handleChangeValues function
  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <div
            className={`card__header-item ${step === 1 ? "current-step" : ""}`}
          >
            {" "}
            Informations
          </div>
          <div
            className={`card__header-item ${step === 2 ? "current-step" : ""}`}
          >
            Details
          </div>
          <div
            className={`card__header-item ${step === 3 ? "current-step" : ""}`}
          >
            Summary
          </div>
        </div>
        <div className="card__body">
          {/*components conditional rendering here*/}
          {step === 1 && (
            <Information
              formValues={formValues}
              onChangeValues={handleChangeValues}
            />
          )}
          {step === 2 && (
            <Details
              formValues={formValues}
              onChangeValues={handleChangeValues}
            />
          )}
          {step === 3 && <Summary formValues={formValues} />}
        </div>
        <div className="card__footer">
          <button
            className="btn-prev"
            /* button disabled on specefic status & onClick event */
            disabled={step === 1}
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            prev
          </button>
          <button
            className="btn-next"
            /* button disabled on specefic status & onClick event */
            disabled={step === 3}
            onClick={() => setStep((prevStep) => prevStep + 1)}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
