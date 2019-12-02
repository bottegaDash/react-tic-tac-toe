import React from "react";
import Square from "./square.js";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

describe("Test Square", () => {
  const mockCallBack = jest.fn();
  var props = { onClick: mockCallBack, value: "O" };
  var squareButton = shallow(<Square {...props} />);

  it("Contains button element", () => {
    expect(squareButton.exists("button")).toEqual(true);
  });

  it("Contains a class name of square", () => {
    expect(squareButton.exists(".square")).toEqual(true);
  });

  it("Contains a clickEvent", () => {
    squareButton.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("Contains a content in the button tag", () => {
    expect(squareButton.text()).toEqual("O");
  });
});
