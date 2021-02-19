import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Details.css';

const Details = props => {
  var countries = "";
  if (props.countries.length != 0) {
    console.log(props.countries);
    countries = ", " + props.countries.join('/');
  } 

  return (
    <div className="details">
      <h1>{props.title}</h1>
      <h2><a href={props.companyWebsiteUrl} target="_blank" rel="noopener noreferrer">{props.companyName}</a></h2>
      <div className="subheader-container">
        <h3>-{props.cities.join('/')}{countries}</h3>
        <a href={props.applyUrl} target="_blank" rel="noopener noreferrer"><button >Apply</button></a>
      </div>
      <ReactMarkdown source={props.description} />
    </div>
  );
}

export default Details;
