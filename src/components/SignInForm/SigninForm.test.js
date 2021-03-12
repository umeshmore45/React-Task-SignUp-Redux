import SignInForm from "./SignInForm";
import { shallow } from "enzyme";

describe("testing SignFrom", () => {
  let updateEmail;
  let updatePassword;
  let wrapper;
  beforeEach(() => {
    updateEmail = jest.fn();
    updatePassword = jest.fn();
    wrapper = shallow(
      <SignInForm updateEmail={updateEmail} updatePassword={updatePassword} />
    );
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

  it("testing input email filed", () => {
    wrapper.find("#outlined-email").simulate("change", {
      target: {
        value: "umeshmore643@gmail.com",
      },
    });
    wrapper.update();

    expect(wrapper.find("#outlined-email").props("value")).toEqual(
      "umeshmore643@gmail.com"
    );
  });

  it("tseting Password Filed", () => {
    wrapper.find("#outlined-password").simulate("change", {
      target: {
        value: "Pass@123",
      },
    });

    expect(wrapper.find("#outlined-password").prop("value")).toEqual(
      "Pass@123"
    );
  });
});
