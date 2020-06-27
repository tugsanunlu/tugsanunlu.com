import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"

const experiences = [
  {
    company: "OKULİSTİK",
    date: "February 2020 - Present",
    title: "Front-End Developer"
  },
  {
    company: "ITOPYA",
    date: "January 2018 - Februrary 2019",
    title: "Front-End Developer"
  },
  {
    company: "TREEGROUP",
    date: "JULY 2014 - DECEMBER 2017",
    title: "Front-End Developer"
  },
  {
    company: "EVRIMNET DIGITAL",
    date: "JUNE 2012 - AUGUST 2012",
    title: "Web Developer Intern"
  }
];

const ExperienceList = () => (
  <Layout>
    <SEO title="work experience" />
    <h3>
      work experience
    </h3>
    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
      {experiences.map(experience =>
        <Experience key={experience.company} experience={experience} />
      )}
    </div>
  </Layout>
)

export default ExperienceList
