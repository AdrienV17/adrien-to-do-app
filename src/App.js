import React, {  useEffect } from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInAndUp from "./pages/sign-in-and-up/sign-in-and-up.page";
import Homepage from "./pages/homepage/homepage.page";
import TodayThingsPage from "./pages/today-things/today-things.page";
import { userTypes } from './redux/user/user.types';
import { typeAction } from './assets/functions';

const App=()=> {

  useEffect(() => {
    typeAction(userTypes.CHECK_USER_SESSION)
  
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/sign-in"
          render={(props) => <SignInAndUp isSignIn {...props} />}
        />
        <Route
          exact
          path="/sign-up"
          render={(props) => <SignInAndUp {...props} />}
        />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/today" component={TodayThingsPage} />
        <Route
          exact
          path="/Redirect"
          render={({ location,history}) => history.push(location.state.route)}
        />
      </Switch>
    </div>
  );
}

export default App;
