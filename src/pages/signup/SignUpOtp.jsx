import { useState } from "react";
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
    Responce: "",
    success: "",
    Otp: "",
  });
  console.log(props.state);

  const updateOtp = (event) => {
    setFormData({
      ...formData,
      Otp: event.target.value,
    });
  };

  const SignUpSubmit = (event) => {
    event.preventDefault();
    props.SignUpOtp();
  };

  return (
    <div>
      <h1>OTP</h1>
      <SignUpOtpForm updateOtp={updateOtp} SignUpSubmit={SignUpSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignUpOtp: () => {
      dispatch(authActionGenretor(authActionType.SIGNUPOTP));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpOtp);
