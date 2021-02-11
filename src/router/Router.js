import { MuiThemeProvider } from "@material-ui/core";
import { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Details from "../pages/Details/Details";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import SignUpOtp from "../pages/signup/SignUpOtp";
import store from "../redux/store/store";
import { theme } from "../theme";

class RouterRoute extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signUp" exact component={SignUp} />
                <Route path="/signIn" exact component={SignIn} />
                <Route path="/signUp/Otp" exact component={SignUpOtp} />
                <Route path="/signIn/details" exact component={Details} />
                <Route exact component={NotFound} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        </Provider>
      </>
    );
  }
}

export default RouterRoute;
