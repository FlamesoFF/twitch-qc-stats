import './App.scss';
import React from 'react';
import Panel from "../panel/panel";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AlertBox from "../alert/alert";
import { Container } from 'react-bootstrap';
import store from "../../store/store";
import { loadStreamerStats } from "../../store/thunks/stats-api.thunks";


class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadStreamerStats());
  }

  render() {
    return (
      <Container fluid
                 className="app align-items-center p-0">
        <BrowserRouter>
          <Switch>
            <Route exact
                   path="/">
              <Panel/>
            </Route>
          </Switch>
        </BrowserRouter>

        <AlertBox/>
      </Container>
    );
  }
}

export default App;
