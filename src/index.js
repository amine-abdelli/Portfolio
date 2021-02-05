import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Projets from "./components/Projets";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const Root = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/projets" component={Projets} />
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
