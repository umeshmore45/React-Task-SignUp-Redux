import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { authActionType } from "../constant/authActionType";
import { GetUser, SignIn, SignUp, SignUpOtp } from "./authMiddle";

describe("Testing AuthMiddleWare", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    store.clearActions();
  });

  it("testing SignUp Middleware", async () => {
    await mock
      .onPost(`${process.env.REACT_APP_BASE_URL}/user/register`)
      .reply(200, {
        msg: "Verify Otp",
        success: true,
      });

    // await axios
    //   .post(`${process.env.REACT_APP_BASE_URL}/user/register`)
    //   .then((data) => {
    //     console.log(data.data.sucess);
    //   });

    const action = {
      type: authActionType.SIGNUP,
    };

    const payload = {
      user: {
        name: "Some",
        email: "some643@gmail.com",
        password: "Pass@123",
        phone: "445754",
      },
    };

    return await store.dispatch(SignUp(action, payload)).then(() => {
      // console.log(store.getActions(), "hel");
      expect(store.getActions()).toEqual([
        {
          type: "auth/signUp",
          payload: {
            name: "Some",
            email: "some643@gmail.com",
            phone: "445754",
            password: "Pass@123",
            Response: "Verify Otp",
            success: true,
          },
        },
      ]);
    });
  });

  it("testing SignUpOtp MiddleWare", async () => {
    const action = {
      type: authActionType.SIGNUPOTP,
    };

    const payload = {
      user: {
        name: "Some",
        email: "some643@gmail.com",
        phone: "14563",
        password: "Pass@123",
        Otp: "478596",
      },
    };

    await mock
      .onPost(`${process.env.REACT_APP_BASE_URL}/user/verifyRegister`)
      .reply(200, {
        msg: "SuccessFully SignUp",
        success: true,
      });

    return await store.dispatch(SignUpOtp(action, payload)).then(() => {
      // console.log(store.getActions());
      expect(store.getActions()).toEqual([
        {
          type: "auth/signUpOtp",
          payload: {
            name: "Some",
            email: "some643@gmail.com",
            phone: "14563",
            password: "Pass@123",
            Otp: "478596",
            response: "SuccessFully SignUp",
            success: true,
          },
        },
      ]);
    });
  });

  it("testing SignIn MiddleWare", async () => {
    const action = {
      type: authActionType.SIGNIN,
    };

    await mock
      .onPost(`${process.env.REACT_APP_BASE_URL}/user/login`)
      .reply(200, {
        success: true,
        response: "logIn",
      });

    // await axios
    //   .post(`${process.env.REACT_APP_BASE_URL}/user/login`)
    //   .then((data) => {
    //     console.log(data.data.sucess);
    //   });

    const payload = {
      user: {
        email: "umeshmore643@gmail.com",
        password: "Pass@123",
      },
    };
    return await store.dispatch(SignIn(action, payload)).then(() => {
      // console.log(store.getActions(), "hello");
      expect(store.getActions()).toEqual([
        {
          type: "auth/signIn",
          payload: {
            data: {
              response: "logIn",
              success: true,
            },
            success: true,
            token: undefined,
          },
        },
      ]);
    });
  });

  it("testing SignIn else MiddleWare", async () => {
    const action = {
      type: authActionType.SIGNUP,
    };

    const payload = {
      user: {
        name: "Some",
        email: "some643@gmail.com",
      },
    };

    await mock
      .onPost(`${process.env.REACT_APP_BASE_URL}/user/login`)
      .reply(200, {
        msg: "Wrong Email",
        success: false,
      });

    return await store.dispatch(SignIn(action, payload)).then(() => {
      console.log(store.getActions());
    });
  });

  it("testing GetUser MiddleWare", async () => {
    const action = {
      type: authActionType.GETUSER,
    };

    const payload = {
      token: "44f14s6d46s4ds",
    };

    await mock.onGet(`${process.env.REACT_APP_BASE_URL}/user`).reply(200, {
      success: true,
      user: "Some Name",
    });

    return await store.dispatch(GetUser(action, payload)).then(() => {
      // console.log(store.getActions());

      expect(store.getActions()).toEqual([
        {
          type: "auth/getUser",
          payload: { success: true, user: "Some Name" },
        },
      ]);
    });
  });
});
