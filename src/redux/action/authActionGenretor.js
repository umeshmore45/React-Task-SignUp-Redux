import { authActionType } from "../constant/authActionType";
import { GetUser, SignIn, SignUp, SignUpOtp } from "../middleware/authMiddle";

const authActionGenretor = (actionType, payload = {}) => {
  switch (actionType) {
    case authActionType.SIGNUP:
      return SignUp(actionType, payload);

    case authActionType.SIGNUPOTP:
      return SignUpOtp(actionType, payload);

    case authActionType.SIGNIN:
      return SignIn(actionType, payload);

    case authActionType.GETUSER:
      return GetUser(actionType, payload);

    default:
      return {
        type: "Invalid",
      };
  }
};

export default authActionGenretor;
