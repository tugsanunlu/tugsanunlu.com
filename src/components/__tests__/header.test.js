import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"

describe("Header", () => {
  it("Renders check", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});