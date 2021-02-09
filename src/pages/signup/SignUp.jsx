import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SignUpForm from "../../components/SignUpFrom/SignUpForm";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
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

  const SignUpSubmit = (event) => {
    event.preventDefault();
    props.Sign(formData);
  };

  console.log(props.state);

  useEffect(() => {
    if (props.state.success) {
      props.history.push({
        pathname: "/signUp/Otp",
        state: props.state,
      });
    } else {
      if (props.state.Response) {
        alert(props.state.Response);
      }
    }
  });

  return (
    <div>
      <h1>SignUp</h1>
      <SignUpForm
        SignUpSubmit={SignUpSubmit}
        updateEmail={updateEmail}
        updateName={updateName}
        updatePhone={updatePhone}
        updatePassword={updatePassword}
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
    Sign: (user) => {
      return dispatch(authActionGenretor(authActionType.SIGNUP, { user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
