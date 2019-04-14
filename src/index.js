import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/FirstComponent';

const element = document.getElementById('root');
ReactDOM.render(
    <div>
        <First value="First Component" subValue="Hey, I'm Using this component"></First>
    </div>
    , element);