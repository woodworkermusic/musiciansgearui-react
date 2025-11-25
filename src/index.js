import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "react-error-boundary";

window.onerror = function(msg, src, lineNum, colNum, error) {
  let consoleMsgs = [];

  consoleMsgs.push(`Error:\n${msg}`);
  consoleMsgs.push(`Source:\n${src}`);
  consoleMsgs.push(`Line #:\n${lineNum}`);
  consoleMsgs.push(`Column #:${colNum}`);
  consoleMsgs.push(`Error Object:\n${error}`);

  console.error(consoleMsgs.join('\n'));

  return false;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ErrorBoundary fallback={<div>OH NOEZ</div>}>
    <App />    
  </ErrorBoundary>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
