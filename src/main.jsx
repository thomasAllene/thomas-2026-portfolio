import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/cinematic.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* BASE_URL is '/thomas-2026-portfolio/' in production, '/' in dev */}
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
