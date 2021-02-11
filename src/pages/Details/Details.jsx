import { Component } from "react";
import { connect } from "react-redux";
import { getCookies, removeCookies } from "../../helper/Cookies";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

class Details extends Component {
  componentDidMount = () => {
    this.props.GetDetails(getCookies());
  };

  render() {
    return (
      <div>
        <button onClick={this.componentWillUnmount}>SignOut</button>
        <h1>DashBoard</h1>
      </div>
    );
  }

  componentWillUnmount = (event) => {
    removeCookies();
    this.props.history.push({
      pathname: "/",
      state: "",
    });
  };
}
const mapStateToProps = (state) => {
  return {
    state: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDetails: (token) => {
      dispatch(authActionGenretor(authActionType.GETUSER, { token }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
