import "../styles/Services.scss";
import { services } from "./overviewContent";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
function ServiceComponent(props) {




  return (
    <div className="serviceCard">
      <img src={props.logo} alt={`${props.name}`} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

const Services = () => {


  const navigate = useNavigate()

  const servicesComponents = services.map((value, Index) => {
    return (
      <ServiceComponent
        key={Index}
        name={value.name}
        logo={value.logo}
        description={value.description}
      />
    );
  });

  function handleClick(){
    navigate('/Contact')
  }
  return (
    <>
      <div className="services">
        <p className="heading">OUR EXPERTISE</p>
        <div className="container">{servicesComponents}</div>
        <button className="button" onClick={handleClick}>SCHEDULE A CONSULTATION</button>
      </div>
    </>
  );
};

export default Services;
