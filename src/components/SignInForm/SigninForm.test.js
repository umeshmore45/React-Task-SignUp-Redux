import SignInForm from "./SignInForm";
import { shallow } from "enzyme";
import React from "react";
jest.mock("../../pages/signin/SignIn.jsx", () => {});

describe("testing SignFrom", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignInForm />);
  });

  it("testing email input", () => {
    expect(wrapper.find("#outlined-email")).toHaveLength(1);
  });

  it("testing password input", () => {
    expect(wrapper.find("#outlined-password")).toHaveLength(1);
  });
  it("testing  text", () => {
    expect(wrapper.find("#title").text()).toContain(
      "SIGNIN TO S H O P P I N G"
    );
  });
  it("testing BackButton", () => {
    wrapper.find("#backBtn").at(0).simulate("click");
    expect(wrapper.find("#backBtn").text()).toContain("BACK");
  });
});
