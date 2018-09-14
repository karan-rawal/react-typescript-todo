import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.Component.scss';
import HomeComponent from './Home.Component';

export default class AppComponent extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
      </Switch>
    );
  }
}
