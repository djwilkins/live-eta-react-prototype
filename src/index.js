import React from 'react';
import { render } from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline'; // Material UI alternative to normalize.css

const mountNode = document.getElementById('root');

render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    mountNode
);