import reportWebVitals from "reportWebVitals";
import ReactDOM from 'react-dom/client';
import Router from "pages/Router";
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
