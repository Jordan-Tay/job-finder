import React, { useState, useEffect, useCallback } from 'react';
import Nav from './components/Nav';
import Details from './components/Details';
import { observer } from 'mobx-react';
import './App.css';

function App(props) {
  const [details, setDetails] = useState(<></>);

  const bookmarks = props.bookmarks;

  const displayDetails = det => {
    setDetails(<Details {...det} bookmarks={bookmarks} />);
  };

  return (
    <div className="App">
      {details}
      <Nav bookmarks={props.bookmarks} displayDetails={displayDetails}/>
    </div>
  );
}

export default observer(App);