import React from "react";
import { mount } from "enzyme";
import SignUp from "./SignUp";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

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
    window.alert = jest.fn();
    useEffect = jest.spyOn(React, "useEffect");
    store = mockStore(state);
    const history = {
      push: jest.fn(),
    };
    window.alert.mockClear();
    mockUseEffect();

    // wrapper = shallow(<SignUp store={store} history={history} />)
    //   .childAt(0)
    //   .dive();

    wrapper = mount(
      <BrowserRouter>
        <SignUp store={store} history={history} />
      </BrowserRouter>
    );
  });

  it("testing SignUpSubmit", () => {
    wrapper
      .find("button")
      .find("#SignUpBtn")
      .simulate("submit", { preventDefault: jest.fn() });
    // console.log(wrapper.debug());
  });

  it("testing UpdateName", () => {
    wrapper
      .find("input")
      .find("#outlined-name")
      .at(0)
      .simulate("change", {
        target: {
          value: "Umesh More",
        },
      });
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
  });
  it("testing UpdatePhone", () => {
    wrapper
      .find("input")
      .find("#outlined-phone")
      .at(0)
      .simulate("change", {
        target: {
          value: "995468513",
        },
      });
  });

  it("testing UpdatePassword", () => {
    wrapper
      .find("input")
      .find("#outlined-password")
      .at(0)
      .simulate("change", {
        target: {
          value: "Pass@123",
        },
      });
  });

  it("testing UpdateOtp", () => {
    wrapper
      .find("input")
      .find("#outlined-Otp")
      .at(0)
      .simulate("change", {
        target: {
          value: "478123",
        },
      });
    // console.log(wrapper.debug());
  });
});
