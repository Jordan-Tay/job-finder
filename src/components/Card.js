import React from 'react';
import './Card.css';

const Card = (props) => {
  const handleClick = () => {
    
  }

  return (
    <div 
      className="card"
      onClick={() => handleClick()}
    >
      <div className="company-container">
        {(props.companyLogoUrl != null && props.companyLogoUrl != "") && <img src={props.companyLogoUrl} />}
        <h2>{props.title}</h2>
      </div>
      <h3>{props.companyName} - {props.cities.join('/')}</h3> 
    </div>
  );
}

export default Card;
