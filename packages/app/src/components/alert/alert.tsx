import React from "react";
import { Alert } from "react-bootstrap";
import store from "../../store/store";


export default class AlertBox extends React.Component {
  private appState = store.getState();

  render() {
    let visible, text, variant, type;

    if (this.appState?.notification) {
      ({
        visible,
        text,
        variant,
        type
      } = this.appState.notification);
    }

    return (<div>
      {
        visible === true &&
        <Alert
          variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      }
    </div>);
  }
}


