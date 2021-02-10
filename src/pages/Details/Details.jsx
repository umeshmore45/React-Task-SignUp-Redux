import { Component } from "react";
import { connect } from "react-redux";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

class Details extends Component {
  // state = {
  //   token: "",
  // };

  componentDidMount = () => {
    // console.log(document.cookie);
    let cok = document.cookie.split(";");
    // console.log(cok[0]);
    // this.setState({
    //   token: this.props.state.data.token,
    // });
    this.props.GetDetails(cok[0]);
  };

  render() {
    // console.log(this.props.state);

    return (
      <div>
        <button onClick={this.componentWillUnmount}>SignOut</button>
        <h1>DashBoard</h1>
      </div>
    );
  }

  componentWillUnmount = (event) => {
    document.cookie = "";
    this.props.history.push({
      pathname: "/",
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
