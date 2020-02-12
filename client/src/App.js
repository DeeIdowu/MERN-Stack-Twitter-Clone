import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "./store";

import Home from "../src/components/Home/Home";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Register";
import Profile from "../src/components/Profile/Profile";
import NotFound from "../src/components/NotFound";
import Main from "../src/components/Layout/Main/Main";
import setAuthHeader from "./utils/setAuthHeader";
import { logoutUser, getCurrentUser } from "./actions/authActions";

if (localStorage.getItem("jwtToken")) {
  const currentTime = Date.now() / 1000;
  const decode = jwt_decode(localStorage.getItem("jwtToken"));
  if (currentTime > decode.exp) {
    store.dispatch(logoutUser);
    window.location.href = "/";
  } else {
    setAuthHeader(localStorage.getItem("jwtToken"));
    store.dispatch(getCurrentUser());
  }
}

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
              <Route exact path="/profile/:userId" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
