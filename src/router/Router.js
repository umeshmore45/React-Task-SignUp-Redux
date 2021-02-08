import { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

class RouterRoute extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/signIn" exact component={SignIn} />
            <Route exact component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default RouterRoute;
