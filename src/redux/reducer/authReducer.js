import { authActionType } from "../constant/authActionType";

let intialState = {
  user: [],
  userOtp: [],
};
const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case authActionType.SIGNUP:
      return {
        ...state,
        user: { ...action.payload },
      };

    case authActionType.SIGNUPOTP:
      return {
        ...state,
        userOtp: { ...action.payload },
      };

    case authActionType.SIGNIN:
      return {
        ...state,
        user: { ...action.payload },
      };

    case authActionType.GETUSER:
      return {
        ...state,
        user: { ...action.payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
