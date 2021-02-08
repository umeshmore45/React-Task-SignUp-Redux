import { authActionType } from "../constant/authAction.type";

let intialState = {
  user: [],
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case authActionType.SIGNUP:
      return {
        ...state,
        user: { ...action.payload.user },
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
