import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Canvas from "./Components/Canvas";
import Home from "./Components/Home";

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
       <Route path="/canvas">
        <Canvas/>
       </Route>
       <Route path="/">
        <Home/>
       </Route>
      </Switch>
    </Router>
  )
}

export default RouterConfig;
