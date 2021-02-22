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
        <div>
          <h2>{props.title}</h2>
          {props.isFeatured && <h4>Featured</h4>}
        </div>
      </div>
      <h3>{props.companyName} - {props.cities.join('/')}</h3> 
      <div className="small-info-container">
        <h6>Posted: {props.postedAt.substring(0, 10)}</h6> 
        <h6>{props.commitment}</h6> 
      </div>
    </div>
  );
}

export default Card;
