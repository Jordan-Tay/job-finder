import React, { useState } from 'react';
import Details from './Details';
import './Card.css';

const Card = props => {
  const handleClick = () => {
    props.displayDetails(props); 
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
      <h6>Posted: {props.postedAt.substring(0, 10)}</h6> 
    </div>
  );
}

export default Card;
