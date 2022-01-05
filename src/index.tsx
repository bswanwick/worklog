import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import services from './services';
// import reportWebVitals from '../reportWebVitals'; // some create react app thing

const domElementID = 'root';

console.log(`[worklog.index] Rendering React to #${domElementID}.`);

// Render React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(domElementID),
);

console.log('[worklog.index] React rendered.');

services.state.setState({ reactRendered: true });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// TODO - This file should probably be just a TS file that brings /services and /components together.
