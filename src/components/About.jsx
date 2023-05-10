import "../styles/About.scss";
import process1 from "../assets/AboutImages/chat.png";
import process2 from "../assets/AboutImages/approved.png";
import process3 from "../assets/AboutImages/implement.png";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Team } from "./overviewContent";
import {useNavigate} from 'react-router-dom';
function TeamMember({ img, name, designation, linkdien, facebook, insta }) {
  return (
    <div className="memberCard">
      <div className="imgBackground">
        <img src={img} alt={name} />
      </div>
      <div className="aboutMember">
        <h3>{name}</h3>
        <p>{designation}</p>
        <div className="socialMedia">
          <a href={linkdien}>
            <FaLinkedin />
          </a>
          <a href={facebook}>
            <FaFacebook />
          </a>
          <a href={insta}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  const memberComponents = Team.map((value, Index) => {
    return <TeamMember key={Index} {...value} />;
  });

  const navigate = useNavigate()
  function handleClick(){
    navigate('/Contact')
  }

  return (
    <>
      <div className="About">
        <p className="heading">ABOUT US</p>
        <p className="aboutPara">
          Nezler Technologies was founded with a mission to deliver exceptional
          business services characterized by speed, precision, and unwavering
          commitment. We carefully choose clients who share our vision and can
          bring value to their business. We strive for total alignment with our
          clients' goals to ensure mutual success and a long-lasting
          partnership.
        </p>
        <div>
          <p className="smallHead">The WorkFlow</p>
          <h2>How Nezler Tech Works</h2>
          <div className="underLine"></div>
          <p className="aboutPara">
            We make it a priority to keep our clients informed every step of the
            way. Our simple and effective onboarding process ensures that
            everyone is aware of the project scope, timelines, and deliverables
          </p>
          <div className="process">
            <div className="processDetail">
              <img src={process1} alt="one-to-one Call" />
              <h3>1-on-1 Discovery Call</h3>
              <p>Understanding Need, Budget, timeline</p>
            </div>
            <div className="processDetail">
              <img src={process2} alt="proposal submission" />
              <h3>Proposal Submission</h3>
              <p>Final discussion & project signup with agreeable KPIs.</p>
            </div>
            <div className="processDetail">
              <img src={process3} alt="implementaion" />
              <h3>Execution</h3>
            </div>
          </div>
        </div>
        <div>
          <p className="smallHead">OUR TEAM</p>
          <h2>Meet The Expert</h2>
          <div className="underLine"></div>
          <div className="members">{memberComponents}</div>
        </div>

        <button className="button" style={{marginBottom: '2em'}} onClick={handleClick}>CONTACT US</button>

      </div>
    </>
  );
};

export default About;
