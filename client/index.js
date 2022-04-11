import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { HooksChromogenObserver } from 'chromogen';

render(
    <HooksChromogenObserver>
        <App />     
    </HooksChromogenObserver>
, document.getElementById('app'),
); 