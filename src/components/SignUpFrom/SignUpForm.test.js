import { shallow } from "enzyme";
import SignUpForm from "./SignUpForm";

describe("testing SignUp From", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  it("check input name", () => {
    expect(wrapper.find("#outlined-name")).toHaveLength(1);
  });

  it("check input email", () => {
    expect(wrapper.find("#outlined-email")).toHaveLength(1);
  });

  it("check input phone", () => {
    expect(wrapper.find("#outlined-phone")).toHaveLength(1);
  });
  it("check input password", () => {
    expect(wrapper.find("#outlined-password")).toHaveLength(1);
  });
});
