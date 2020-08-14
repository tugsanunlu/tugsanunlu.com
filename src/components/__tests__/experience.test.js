import React from "react"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Experience from "../experience"

describe("Experience", () => {
  it("Experience data check", () => {
    const experience = {
      title: "COMPUTER TECHNOLOGY AND PROGRAMMING",
      subTitle: "ASSOCIATE'S DEGREE",
      isActive: false,
    }
    const { getByText, container } = render(<Experience experience={experience} />)
    const card = container.querySelector('.uk-card')

    expect(getByText(experience.title)).toBeInTheDocument()
    expect(getByText(experience.subTitle)).toBeInTheDocument()
    expect(card).toHaveClass('uk-card-secondary')
  })
})