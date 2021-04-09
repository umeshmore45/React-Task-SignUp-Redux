import authReducer from "./authReducer";

describe("testing authReducer", () => {
  const intialState = {
    userSignUp: [],
    userSignIn: [],
    userOtp: [],
    userDetail: [],
  };

  it("should return intialState", () => {
    expect(authReducer(undefined, {})).toEqual(intialState);
  });

  it("should handle SignUp", () => {
    const action = {
      type: "auth/signUp",
      payload: { data: "some" },
    };

    expect(authReducer(intialState, action)).toEqual({
      userSignUp: { data: "some" },
      userSignIn: [],
      userOtp: [],
      userDetail: [],
    });
  });

  it("should handle SignUpOtp", () => {
    const action = {
      type: "auth/signUpOtp",
      payload: { data: "some" },
    };

    expect(authReducer(intialState, action)).toEqual({
      userSignUp: [],
      userSignIn: [],
      userOtp: { data: "some" },
      userDetail: [],
    });
  });

  it("Should handle SignIn", () => {
    const action = {
      type: "auth/signIn",
      payload: { data: "some" },
    };

    expect(authReducer(intialState, action)).toEqual({
      userSignUp: [],
      userSignIn: { data: "some" },
      userOtp: [],
      userDetail: [],
    });
  });

  it("Should handle Details Page", () => {
    const action = {
      type: "auth/getUser",
      payload: { data: "some" },
    };

    expect(authReducer(intialState, action)).toEqual({
      userSignUp: [],
      userSignIn: [],
      userOtp: [],
      userDetail: { data: "some" },
    });
  });
});
