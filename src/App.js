import React, { useState, useEffect, useCallback } from 'react';
import Nav from './components/Nav';
import Details from './components/Details';
import './App.css';

function App() {
  const [details, setDetails] = useState(<></>);

  useEffect(() => {
    console.log("update");
    console.log(details);
  }, [details]);

  const displayDetails = det => {
    setDetails(<Details {...det} />);
    console.log(details);
    console.log(det);
    console.log(<Details {...det} />);
  };

  return (
    <div className="App">
      {details}
      <Nav displayDetails={displayDetails}/>
    </div>
  );
}

export default App;
