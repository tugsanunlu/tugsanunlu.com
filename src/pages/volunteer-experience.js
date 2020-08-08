import React from "react"
import ExperienceList from "../components/experience-list"

const experiences = {
  title: "volunteer experience",
  list: [
    {
      company: "MOZILLA",
      date: "MAY 2020 - PRESENT",
      title: "MDN CONTRIBUTOR",
      isActive: true
    },
    {
      company: "WIKIPEDIA",
      date: "OCTOBER 2016 - PRESENT",
      title: "CONTRIBUTING WRITER",
      isActive: true
    },
    {
      company: "OY VE ÖTESİ",
      date: "JULY 2014 - PRESENT",
      title: "INDEPENDENT VOLUNTEER",
      isActive: true
    },
    {
      company: "PARDUS",
      date: "JUNE 2009 - MAY 2011",
      title: "COMMUNITY CONTRIBUTOR",
      isActive: false
    }
  ]
};

const Experiences = () => (
  <ExperienceList title={experiences.title} experiences={experiences.list} />
)

export default Experiences
