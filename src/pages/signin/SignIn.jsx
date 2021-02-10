import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SignInForm from "../../components/SignInForm/SignInForm";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateEmail = (event) => [
    setFormData({
      ...formData,
      email: event.target.value,
    }),
  ];

  const updatePassword = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  const SignInSubmit = (event) => {
    event.preventDefault();
    props.SignIn(formData);
  };

  useEffect(() => {
    document.cookie = props.state.token;
    if (props.state.success) {
      props.history.push({
        pathname: "/signIn/details",
        // state: props.state,
      });
    } else {
      if (props.state.response) {
        alert(props.state.response);
      }
    }
  });

  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm
        updateEmail={updateEmail}
        updatePassword={updatePassword}
        SignInSubmit={SignInSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignIn: (user) => {
      dispatch(authActionGenretor(authActionType.SIGNIN, { user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
