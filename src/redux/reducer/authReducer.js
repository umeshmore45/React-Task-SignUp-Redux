import { authActionType } from "../constant/authActionType";

let intialState = {
  userSignUp: [],
  userSignIn: [],
  userOtp: [],
  userDetail: [],
};
const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case authActionType.SIGNUP:
      return {
        ...state,
        userSignUp: { ...action.payload },
      };

    case authActionType.SIGNUPOTP:
      return {
        ...state,
        userOtp: { ...action.payload },
      };

    case authActionType.SIGNIN:
      return {
        ...state,
        userSignIn: { ...action.payload },
      };

    case authActionType.GETUSER:
      return {
        ...state,
        userDetail: { ...action.payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
