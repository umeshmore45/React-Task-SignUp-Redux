import { authActionType } from "../constant/authActionType";
import { SignUp } from "../middleware/authMiddle";

const authActionGenretor = (actionType, payload = {}) => {
  switch (actionType) {
    case authActionType.SIGNUP:
      return SignUp(actionType, payload);

    default:
      return {
        type: "Invalid",
      };
  }
};

export default authActionGenretor;
