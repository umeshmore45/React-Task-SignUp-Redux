import { Route, Router, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const RouterRoute = () => {
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
};

export default RouterRoute;
