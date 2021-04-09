import { mount } from "enzyme";
import React from "react";
import SignIn from "./SignIn";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

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
    window.alert = jest.fn();
    useEffect = jest.spyOn(React, "useEffect");
    const history = {
      push: jest.fn(),
    };
    mockUseEffect();
    window.alert.mockClear();

    store = mockStore(state);
    //   wrapper = shallow(<SignIn store={store} history={history} />)
    //     .childAt(0)
    //     .dive();
    wrapper = mount(
      <BrowserRouter>
        <SignIn store={store} history={history} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("testing SignIn  Submit", () => {
    wrapper
      .find("button")
      .find("#SignInBtn")
      .simulate("submit", { preventDefault: jest.fn() });
  });

  it("testing UpdateEmail", () => {
    wrapper
      .find("input")
      .find("#outlined-email")
      .at(0)
      .simulate("change", {
        target: {
          value: "umeshmore643@gmail.com",
        },
      });

    wrapper.update();
    console.log(
      wrapper.find("input").find("#outlined-email").at(0).props().value
    );
    // console.log(wrapper.debug());

    // expect(
    //   wrapper.find("input").find("#outlined-email").at(0).props().value
    // ).toBe("umeshmore643@gmail.com");
  });

  it("Testing UpdatePassword", () => {
    wrapper
      .find("input")
      .find("#outlined-password")
      .at(0)
      .simulate("change", {
        target: {
          value: "Pass@123",
        },
      });
    wrapper.update();

    // console.log(wrapper.find("input").find("#outlined-password").at(0).props());
  });
});
