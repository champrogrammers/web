import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/styles.css';
import '../src/styles/normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bree Serif"></link>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
