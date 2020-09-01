import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';

import Signup from "./screens/Signup/Signup"
import Homepage from "./screens/Homepage/Homepage"
import Landingpage from "./screens/Landingpage/Landingpage"
import Profile from "./screens/Profile/Profile"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/landingpage" component={Landingpage} />
        <Route exact path="/profile" component={Profile} />
      
      </Switch>
    </div>
  );
}

export default App;
