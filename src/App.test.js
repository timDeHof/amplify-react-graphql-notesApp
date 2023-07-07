import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App signOut={undefined} />);
  });

  it("renders the logo image", () => {
    const wrapper = shallow(<App signOut={undefined} />);
    expect(wrapper.find(".App-logo")).toHaveLength(1);
  });

  it("renders the heading with text 'We now have Auth!'", () => {
    const wrapper = shallow(<App signOut={undefined} />);
    expect(wrapper.find("Heading").text()).toEqual("We now have Auth!");
  });

  it("calls the signOut function on button click", () => {
    const mockSignOut = jest.fn();
    const wrapper = shallow(<App signOut={mockSignOut} />);
    wrapper.find("Button").simulate("click");
    expect(mockSignOut).toHaveBeenCalled();
  });
});
