import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import resume from './pages/resume'

import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./pages/firebase";

//https://blog.netcetera.com/how-to-create-guarded-routes-for-your-react-app-d2fe7c7b6122
const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  console.log("auth:" + auth);

  return (
    <Route {...rest} render={(props) => (
      auth === true
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  );
}

function App() {
  const [isAutheticated, setisAutheticated] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setisAutheticated(true)
    }
    else {
      setisAutheticated(false)
    }
  });

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <GuardedRoute path='/resume' component={resume} auth={isAutheticated} />
      </Switch>
      <a id="mlh-trust-badge" style={{ display: "block", maxWidth: "100px", minWidth: "60px", position: "fixed", right: "20px", top: "0", width: "10%", zIndex: "10000" }} href="https://mlh.io/seasons/2023/events" target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2022 Hackathon Season" style={{ width: "100%" }} />
      </a>
    </Router>
  );
}

export default App;
