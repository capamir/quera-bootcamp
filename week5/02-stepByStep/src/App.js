import "./App.css";
// import Information from "./components/Informations";
// import Details from "./components/Details";
// import Summary from "./components/Summary";

function App() {
  // TODO declate step state using useState

  // TODO declare formValues state using useState
  // {
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   gender: "",
  // }

  // TODO handleChangeValues function

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <div className="card__header-item" /*add current-step class*/> Informations</div>
          <div className="card__header-item" /*add current-step class*/>Details</div>
          <div className="card__header-item" /*add current-step class*/>Summary</div>
        </div>
        <div className="card__body">
          {/*components conditional rendering here*/}
        </div>
        <div className="card__footer">
          <button
            className="btn-prev"
            /* button disabled on specefic status & onClick event */
          >
            prev
          </button>
          <button
            className="btn-next"
            /* button disabled on specefic status & onClick event */
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
