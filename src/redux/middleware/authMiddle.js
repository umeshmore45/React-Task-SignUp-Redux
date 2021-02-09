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

const SignUpOtp = (action, payload) => async (dispatch, getstate) => {
  let { name, email, phone, password, Otp } = payload.user;

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  let Request = { name, email, phone, password, otpResponse: Otp };

  await axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/user/verifyRegister`,
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
        Otp,
        response: data.data.msg,
        success: data.data.success,
      };
      dispatch({
        type: authActionType.SIGNUPOTP,
        payload: { ...newpayload },
      });
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const SignIn = (action, payload) => async (dispatch, getstate) => {
  let { email, password } = payload.user;

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  let Request = { email, password };

  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/user/login`, Request, axiosConfig)
    .then((data) => {
      console.log(data.data);

      if (data.data.success) {
        let newpayload = {
          data: data.data,
          success: data.data.success,
        };
        dispatch({
          type: authActionType.SIGNIN,
          payload: { ...newpayload },
        });
      } else {
        let newpayload = {
          success: data.data.success,
          response: data.data.msg,
        };
        dispatch({
          type: authActionType.SIGNIN,
          payload: { ...newpayload },
        });
      }
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

export { SignUp, SignUpOtp, SignIn };
