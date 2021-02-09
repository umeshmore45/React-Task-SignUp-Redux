import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SignUpOtpForm from "../../components/SignUpOtpFrom/SignOtp";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

function SignUpOtp(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    Response: "",
    success: "",
    Otp: "",
  });
  console.log(props.otpState);

  const updateOtp = (event) => {
    setFormData({
      ...formData,
      name: props.state.name,
      email: props.state.email,
      phone: props.state.phone,
      password: props.state.password,
      Response: props.state.Response,
      success: props.state.success,
      Otp: event.target.value,
    });
  };

  const SignUpSubmit = (event) => {
    event.preventDefault();
    props.SignUpOtp(formData);
  };

  useEffect(() => {
    if (props.otpState.success) {
      props.history.push({
        pathname: "/",
        state: props.otpState,
      });
    } else {
      if (props.otpState.response) {
        alert(props.otpState.response);
      }
    }
  });

  return (
    <div>
      <h1>OTP</h1>
      <SignUpOtpForm updateOtp={updateOtp} SignUpSubmit={SignUpSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    otpState: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignUpOtp: (user) => {
      dispatch(authActionGenretor(authActionType.SIGNUPOTP, { user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpOtp);
