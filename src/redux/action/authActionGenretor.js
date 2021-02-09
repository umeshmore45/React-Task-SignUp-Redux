import { authActionType } from "../constant/authActionType";
import { SignUp, SignUpOtp } from "../middleware/authMiddle";

const authActionGenretor = (actionType, payload = {}) => {
  switch (actionType) {
    case authActionType.SIGNUP:
      return SignUp(actionType, payload);

    case authActionType.SIGNUPOTP:
      return SignUpOtp(actionType, payload);

    default:
      return {
        type: "Invalid",
      };
  }
};

export default authActionGenretor;
