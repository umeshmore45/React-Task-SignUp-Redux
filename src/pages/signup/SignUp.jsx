import { connect } from "react-redux";
import authActionGenretor from "../../redux/actions/authAction.genretor";
import { authActionType } from "../../redux/constant/authAction.type";

const SignUp = (props) => {
  console.log(props);
  return (
    <div>
      <h1>SignUp</h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignUp: (user) => {
      return dispatch(authActionGenretor(authActionType.SIGNUP));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
