import React from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from "./components/panel/panel";
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact
            path="/">
            <Panel/>
          </Route>
        </Switch>

      </div>
    );
  }
}

export default App;
