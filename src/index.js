import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import redux from "./store/redux";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={redux}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
