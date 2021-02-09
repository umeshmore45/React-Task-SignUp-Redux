import { Component } from "react";
import { connect } from "react-redux";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

class Details extends Component {
  state = {
    token: "",
  };

  componentDidMount = () => {
    this.setState({
      token: this.props.state.data.token,
    });

    this.props.GetDetails(this.props.state.data.token);
  };

  render() {
    console.log(this.props.state);

    return (
      <div>
        <h1>Details</h1>
      </div>
    );
  }
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
