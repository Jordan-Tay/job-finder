import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bookmarks from './components/Bookmarks';

const bookmarks = Bookmarks.create({ bookmarks: {} });

ReactDOM.render(
  <React.StrictMode>
    <App bookmarks={bookmarks} />
  </React.StrictMode>,
  document.getElementById('root')
);
