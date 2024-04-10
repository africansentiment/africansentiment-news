import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';  // Assuming you have a global stylesheet

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
