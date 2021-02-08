import { authActionType } from "../constant/authActionType";

const SignUp = (action, payload) => (dispatch, getstate) => {
  console.log(payload.user);
  let newpaylaod = {
    name: "Umesh",
    Id: "20",
  };
  dispatch({
    type: authActionType.SIGNUP,
    payload: { ...newpaylaod },
  });
};

export { SignUp };
