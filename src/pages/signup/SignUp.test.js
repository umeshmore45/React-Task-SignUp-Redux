import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("testing SignUp", () => {
  let wrapper, store, useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  const state = {
    authReducer: {
      userSignUp: {
        success: true,
        response: "Hard Hai Bhai",
      },
      userOtp: {
        success: true,
        response: "Hard Hai Bhai",
      },
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    store = mockStore(state);
    const history = {
      push: jest.fn(),
    };

    mockUseEffect();

    wrapper = shallow(<SignUp store={store} history={history} />)
      .childAt(0)
      .dive();

    console.log(wrapper.debug());
  });

  it("taesting SignUpSubmit", () => {});
});
