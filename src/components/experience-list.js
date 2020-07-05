import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"

const ExperienceList = ({ title, experiences }) => {
  return (
    <Layout>
      <SEO title={title} />
      <h3>{title}</h3>
      <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
        {experiences.map(experience =>
          <Experience key={experience.company} experience={experience} />
        )}
      </div>
    </Layout>
  )
}

export default ExperienceList