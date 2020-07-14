import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { appReducer } from './reducers/appReducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


// Redux store
const store = createStore(appReducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
