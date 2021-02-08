import { authActionType } from "../constant/authAction.type";
import { SignUp } from "../middleware/userAuthentication";

const authActionGenretor = (actionType, payload = {}) => {
  switch (actionType) {
    case authActionType.SIGNUP:
      return SignUp(actionType, payload);

    case authActionType.SIGNIN:
      return {
        type: authActionType.SIGNIN,
        payload: { ...payload },
      };

    case authActionType.SIGNOUT:
      return {
        type: authActionType.SIGNOUT,
        paylaod: { ...payload },
      };

    default:
      return {
        type: "Invalid Input",
        payload: { ...payload },
      };
  }
};

export default authActionGenretor;
