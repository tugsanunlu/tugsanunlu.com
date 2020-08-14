import React from "react"
import renderer from "react-test-renderer"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from "../header"

describe("Header", () => {
  it("Render check", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Does it contain a title", () => {
    const siteTitle = "foo"
    const siteSubTitle = "bar"
    const { getByText } = render(
      <Header siteTitle={siteTitle} siteSubTitle={siteSubTitle} />
    )

    expect(getByText(siteTitle)).toBeInTheDocument()
    expect(getByText(siteSubTitle)).toBeInTheDocument()
  })
})
