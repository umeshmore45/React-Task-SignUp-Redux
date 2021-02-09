import { authActionType } from "../constant/authActionType";
import axios from "axios";

const SignUp = (action, payload) => async (dispatch, getstate) => {
  let { name, email, phone, password } = payload.user;

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  let Request = { name, email, phone, password };

  await axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/user/register`,
      Request,
      axiosConfig
    )
    .then((data) => {
      console.log(data.data);
      let newpayload = {
        name,
        email,
        phone,
        password,
        Response: data.data.msg,
        success: data.data.success,
      };
      dispatch({
        type: authActionType.SIGNUP,
        payload: { ...newpayload },
      });
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const SignUpOtp = (action, payload) => (dispatch, getstate) => {
  // console.log(payload.user);

  let newpayload = {
    name: "umesh",
    Id: "2",
  };

  dispatch({
    type: authActionType.SIGNUPOTP,
    payload: { ...newpayload },
  });
};

export { SignUp, SignUpOtp };
