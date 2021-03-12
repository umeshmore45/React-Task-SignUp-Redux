import { shallow } from "enzyme";
import React from "react";
import SignIn from "./SignIn";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("testing SignIn", () => {
  let wrapper, store;
  let useEffect;

  const state = {
    authReducer: {
      userSignIn: {
        success: true,
        response: "Hard Hai Bhai",
      },
    },
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    const history = {
      push: jest.fn(),
    };
    mockUseEffect();
    mockUseEffect();
    store = mockStore(state);
    wrapper = shallow(<SignIn store={store} history={history} />)
      .childAt(0)
      .dive();
  });
  it("testing useeffect", () => {
    console.log(wrapper.debug());
  });
});
