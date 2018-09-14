import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
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
