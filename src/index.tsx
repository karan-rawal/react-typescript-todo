import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppComponent from './components/App.Component';

ReactDOM.render(
  <HashRouter>
    <AppComponent />
  </HashRouter>,
  document.getElementById('root'),
);
