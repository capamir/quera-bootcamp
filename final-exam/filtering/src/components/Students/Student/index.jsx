import avatar from "../../../assets/images/avatar.png";

const Student = ({ rowNumber }) => {
  return (
    <div className="list__item" data-testid="student-row">
      <div className="card">
        <div className="card-body">
          {rowNumber + 1}
          <img src={avatar} width={50} alt="avatar" />
          <div>
            <div className="body-top">
              <div>/* firstName */</div>
              <div>/* lastName */</div>
            </div>
            <div className="body-bottom">
              <div>سن : /* age */</div>
              <div>جنسیت : /* gender */</div>
              <div>دوره : /* course */</div>
              <div>شهر : /* location */</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
