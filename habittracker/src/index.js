import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import App from "./Components/App"
import { Provider } from 'react-redux';
import store  from "./store"
import { BrowserRouter} from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <Provider store={store}>
    <BrowserRouter >
    <App className="app" />
    </BrowserRouter>
    </Provider>
    </StrictMode>
);


