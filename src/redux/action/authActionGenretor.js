import { authActionType } from "../constant/authActionType";
import { SignIn, SignUp, SignUpOtp } from "../middleware/authMiddle";

const authActionGenretor = (actionType, payload = {}) => {
  switch (actionType) {
    case authActionType.SIGNUP:
      return SignUp(actionType, payload);

    case authActionType.SIGNUPOTP:
      return SignUpOtp(actionType, payload);

    case authActionType.SIGNIN:
      return SignIn(actionType, payload);

    default:
      return {
        type: "Invalid",
      };
  }
};

export default authActionGenretor;
