import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./Components/App"
import { Provider } from 'react-redux';
import store  from "./store"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider >
    <App className="app" store={store}/>
  </Provider>
);


