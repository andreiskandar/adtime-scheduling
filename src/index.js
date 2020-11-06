import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(<App />, document.getElementById('root'));
