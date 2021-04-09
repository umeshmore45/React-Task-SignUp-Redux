import { shallow } from "enzyme";
import SignUpOtpForm from "./SignOtp";

describe("teating SignUpOtp", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUpOtpForm />);
  });

  it("tesing Otp input filed", () => {
    expect(wrapper.find("#outlined-Otp")).toHaveLength(1);
  });
});
