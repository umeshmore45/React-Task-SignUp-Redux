import { shallow } from "enzyme";
import Details from "./Details";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("testing DashBoard", () => {
  let store, wrapper;
  const state = {
    authReducer: {
      userDetail: {
        success: true,
        user: {
          name: "Hello",
        },
      },
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore(state);

    const history = {
      push: jest.fn(),
    };

    wrapper = shallow(<Details store={store} history={history} />)
      .childAt(0)
      .dive();
  });

  it("testing SignOut", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("button").text()).toEqual("SignOut");
  });
});
