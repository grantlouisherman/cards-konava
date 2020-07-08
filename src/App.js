import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Canvas />
      </div>
    </Provider>
  );
}

export default App;
