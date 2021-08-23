import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './App';
import RouterPages from './RouterPages';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <RouterPages />
    </React.StrictMode>,
    document.getElementById('root')
);
