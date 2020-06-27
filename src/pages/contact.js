import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="contact" />
    <h3>
      <FontAwesomeIcon icon={["fas", "envelope"]} style={{ width: '23px', height: '23px' }} /> Contact
    </h3>
    <div>
      <a href="mailto: unlutugsan@gmail.com">
        <strong>e-mail:</strong> unlutugsan@gmail.com
        </a>
    </div>
  </Layout>
)

export default SecondPage
