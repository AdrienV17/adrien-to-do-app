import React, {  useEffect } from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInAndUp from "./pages/sign-in-and-up/sign-in-and-up.page";
import Homepage from "./pages/homepage/homepage.page";
import TodayThingsPage from "./pages/today-things/today-things.page";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserId } from './redux/user/user.selectors';
import { userTypes } from './redux/user/user.types';
import { typeAction } from './assets/functions';

const App=({dispatch})=> {

  useEffect(() => {
    dispatch(typeAction(userTypes.CHECK_USER_SESSION))
  
  }, [dispatch]);

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
const mapStateToProps = createStructuredSelector({
  userId:selectUserId
})
export default connect(mapStateToProps)(App);
