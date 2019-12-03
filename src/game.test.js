import React from "react";
import Game from "./game.js";
import Board from "./board.js";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Test Game", () => {
  var theGame;
  beforeEach(() => {
    theGame = shallow(<Game />);
  });

  it("Contains 4 Div Elements", () => {
    expect(theGame.find("div")).to.have.length(4);
  });

  it("Contains one Board element", () => {
    expect(theGame.find(Board)).to.have.length(1);
  });

  it("Contains one ol element", () => {
    expect(theGame.find("ol")).to.have.length(1);
  });

  it("Contains a class name of game", () => {
    expect(theGame.exists(".game")).equal(true);
  });

  it("Contains a class name of game-board", () => {
    expect(theGame.exists(".game-board")).equal(true);
  });

  it("Contains a class name of game-info", () => {
    expect(theGame.exists(".game-info")).equal(true);
  });
});
