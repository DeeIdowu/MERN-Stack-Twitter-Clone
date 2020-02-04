import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "../src/components/Home/Home";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import Main from "../src/components/Layout/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
