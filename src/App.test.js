// import { render, screen } from '@testing-library/react';
import App from "./App";
import { shallow } from "enzyme";

describe("learing testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("Testing Tag", () => {
    console.log(wrapper);
    // expect(wrapper.find("h1").text()).toContain("Hello");
  });
});
