import "../styles/Joinus.scss";
import Pic from "../assets/joinus_pic.png";
import { roles } from "./overviewContent";
function Role({ role, type, qualifications }) {
  const rolesArray = qualifications.map((value, Index) => {
    return (
      <p key={Index}>
        {`${Index + 1}`}. {value}
      </p>
    );
  });

  return (
    <div className="RoleCard">
      <h1>{role}</h1>
      <div>
        <p>Job Type: {type}</p>
        <h4>Qualifications:</h4>
        <div>{rolesArray}</div>
      </div>
      <button className="Applybtn">Apply</button>
    </div>
  );
}

const Joinus = () => {
  const jobComponents = roles.map((value, Index) => {
    return <Role key={Index} {...value} />;
  });

  return (
    <>
      <div className="Joinus">
        <div className="fixed">
          <img src={Pic} alt="Join Us" />
        </div>
        <div className="Roles">{jobComponents}</div>
      </div>
    </>
  );
};

export default Joinus;
