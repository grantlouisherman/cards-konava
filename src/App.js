import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";
import Canvas from "./Components/Canvas";
import RouterConfig from "./RouterConfig";

function App() {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
}

export default App;
