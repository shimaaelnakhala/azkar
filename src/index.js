import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Theme from './Components/Theme/Theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme>
    <BrowserRouter>
    <App />
   </BrowserRouter>
  </Theme>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
