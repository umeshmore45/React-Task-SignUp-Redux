import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SignInForm from "../../components/SignInForm/SignInForm";
import { setCookies } from "../../helper/Cookies";
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
    if (props.state.success) {
      setCookies({
        name: "token",
        value: props.state.token,
        path: "/signIn",
      });
      props.history.push({
        pathname: "/signIn/details",
      });
      return (props.state.success = false);
    } else {
      if (props.state.response) {
        alert(props.state.response);
        return (props.state.response = false);
      }
    }
  });

  return (
    <div>
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
    state: state.authReducer.userSignIn,
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
