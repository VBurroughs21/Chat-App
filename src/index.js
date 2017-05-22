/*eslint-disable*/
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import rootReducer from './reducers/index';

const state = window.__initialState__ || undefined;
const history = createHistory();
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter store={store} history={history}>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
