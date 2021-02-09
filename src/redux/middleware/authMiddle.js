import { authActionType } from "../constant/authActionType";
import axios from "axios";

const SignUp = (action, payload) => async (dispatch, getstate) => {
  let newpaylaod = {
    name: "Umesh",
    Id: "20",
  };

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
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

  dispatch({
    type: authActionType.SIGNUP,
    payload: { ...newpaylaod },
  });
};

export { SignUp };
