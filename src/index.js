import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 
import { Provider } from 'react-redux';
import { Store } from './Component/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {Store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
  
);