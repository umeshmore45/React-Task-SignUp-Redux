import { authActionType } from "../constant/authAction.type";

const SignUp = (action, payload) => (dispatch, getState) => {
  let newpayload = "Hello";
  console.log("Hello");
  return dispatch({
    type: authActionType.SIGNUP,
    payload: { ...newpayload },
  });
};

export { SignUp };
