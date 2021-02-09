import { authActionType } from "../constant/authActionType";

let intialState = {
  user: [],
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
        user: { ...action.payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
