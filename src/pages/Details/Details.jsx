import { Component } from "react";
import { connect } from "react-redux";
import { getCookies, removeCookies } from "../../helper/Cookies";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";
import RichTextEditor from "../../RTE/RichText";

class Details extends Component {
  componentDidMount = () => {
    this.props.GetDetails(getCookies());
  };

  render() {
    return (
      <div>
        {this.props.state.success ? (
          <div>
            <button onClick={this.componentWillUnmount}>SignOut</button>
            <p>Hello {this.props.state.user.name}</p>
            <h1>DashBoard</h1>
            <RichTextEditor />
          </div>
        ) : (
          <p>LOading... </p>
        )}
      </div>
    );
  }

  componentWillUnmount = (event) => {
    removeCookies("token");
    this.props.history.push({
      pathname: "/",
      state: "",
    });
  };
}
const mapStateToProps = (state) => {
  return {
    state: state.authReducer.userDetail,
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
