import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/index.css';

/* eslint-disable */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
