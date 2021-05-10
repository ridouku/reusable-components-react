/* istanbul ignore file */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import ModalDemoLayout from "./demos/ModalDemo";
import { MainSection } from "./container/main";

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/demo/modal" component={ModalDemoLayout} exact />
          <Route path="/" component={MainSection} exact />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default hot(Root);
