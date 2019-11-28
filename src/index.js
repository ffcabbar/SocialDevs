import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';

//CSS Files
import './assets/css/materialdesignicons.min.css';
import './assets/css/webfont.css';
import '../node_modules/bulma/css/bulma.min.css';
import './assets/css/core.css';



//Js Files
import {jQuery}  from 'jquery';
import './assets/data/tipuedrop_content';
import './assets/js/global';
import './assets/js/main';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
