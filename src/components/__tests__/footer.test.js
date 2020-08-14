import React from "react"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Footer from "../footer"

describe("Footer", () => {
  it("Link check", () => {
    const { container } = render(<Footer />)
    const links = container.querySelector('.footer_links a')
    
    expect(links).toBeInTheDocument()
  })
})