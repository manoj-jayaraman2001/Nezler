import "../styles/Services.scss";
import { services } from "./overviewContent";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
function ServiceComponent(props) {
  const navigate = useNavigate()
  function handleClick(e){
    let element_id = e.target.dataset.id;
    if (element_id == 1){
      navigate('/SEO')
    }
    if (element_id == 2){
      navigate('/video')
    }
    if (element_id == 3){
      navigate('/end')
    }
    if (element_id == 4){
      navigate('/uiux')
    }
    if (element_id == 5){
      navigate('/website')
    }
    if (element_id == 6){
      navigate('/paid')
    }
    if (element_id == 7){
      navigate('/email')
    }
  }


  return (
    <div className="serviceCard" data-id = {props.id} onClick={handleClick}>
      <img src={props.logo} alt={`${props.name}`}  data-id = {props.id}/>
      <h3 data-id = {props.id}>{props.name}</h3>
      <p data-id = {props.id}>{props.description}</p>
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
        id = {Index + 1}
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
