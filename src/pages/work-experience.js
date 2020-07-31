import React from "react"
import ExperienceList from "../components/experience-list"

const experiences = {
  title: "work experience",
  list: [
    {
      company: "OKULISTIK",
      date: "February 2020 - Present",
      title: "FRONT-END DEVELOPER",
      isActive: true
    },
    {
      company: "ITOPYA",
      date: "January 2018 - Februrary 2019",
      title: "FRONT-END DEVELOPER",
      isActive: false
    },
    {
      company: "TREEGROUP",
      date: "JULY 2014 - DECEMBER 2017",
      title: "FRONT-END DEVELOPER",
      isActive: false
    },
    {
      company: "EVRIMNET DIGITAL",
      date: "JUNE 2012 - AUGUST 2012",
      title: "WEB DEVELOPER INTERN",
      isActive: false
    }
  ]
};

const Experiences = () => (
  <ExperienceList title={experiences.title} experiences={experiences.list} />
)

export default Experiences
