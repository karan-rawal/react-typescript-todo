import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.Component.scss';
import { HeaderComponent } from './header/Header.Component';
import HomeComponent from './Home.Component';

export default class AppComponent extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
        </Switch>
      </div>
    );
  }
}
