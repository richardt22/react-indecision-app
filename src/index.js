import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss'
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css'


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
