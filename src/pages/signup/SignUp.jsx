import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SignUpForm from "../../components/SignUpFrom/SignUpForm";
import SignUpOtpForm from "../../components/SignUpOtpFrom/SignOtp";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    Otp: "",
  });

  const updateName = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const updateEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const updatePhone = (event) => {
    setFormData({
      ...formData,
      phone: event.target.value,
    });
  };

  const updatePassword = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  const updateOtp = (event) => {
    setFormData({
      ...formData,
      Otp: event.target.value,
    });
  };

  const SignUpSubmit = (event) => {
    event.preventDefault();

    if (props.state.success) {
      props.SignOtp(formData);
      // console.log("otp");
      // return (props.state.success = false);
    } else {
      props.Sign(formData);
      // return (props.state.success = true);
    }
  };

  useEffect(() => {
    if (props.otpState.success) {
      props.history.push({
        pathname: "/",
      });
      alert(props.otpState.response);
      props.otpState.response = false;
      return (props.otpState.success = false);
    } else {
      if (props.otpState.response) {
        alert(props.otpState.response);
        return (props.otpState.response = false);
      }
    }
  });

  return (
    <div>
      <SignUpForm
        SignUpSubmit={SignUpSubmit}
        updateEmail={updateEmail}
        updateName={updateName}
        updatePhone={updatePhone}
        updatePassword={updatePassword}
      />
      {props.state.success ? (
        <SignUpOtpForm updateOtp={updateOtp} SignUpSubmit={SignUpSubmit} />
      ) : (
        <div>
          <h1>{props.state.Response}</h1>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.authReducer.userSignUp,
    otpState: state.authReducer.userOtp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Sign: (user) => {
      return dispatch(authActionGenretor(authActionType.SIGNUP, { user }));
    },
    SignOtp: (user) => {
      dispatch(authActionGenretor(authActionType.SIGNUPOTP, { user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
