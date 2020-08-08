import React from "react"
import ExperienceList from "../components/experience-list"

const experiences = {
  title: "education",
  list: [
    {
      company: "ANADOLU UNIVERSITY",
      date: "2016 - 2020",
      title: "BUSINESS ADMINISTRATION",
      subTitle: "BACHELOR'S DEGREE",
      isActive: false,
    },
    {
      company: "MARMARA UNIVERSITY",
      date: "2011 - 2013",
      title: "COMPUTER TECHNOLOGY AND PROGRAMMING",
      subTitle: "ASSOCIATE'S DEGREE",
      isActive: false,
    },
  ],
}

const Experiences = () => (
  <ExperienceList title={experiences.title} experiences={experiences.list} />
)

export default Experiences
