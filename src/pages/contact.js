import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h3>
      contact
    </h3>
    <div>
      <strong>e-mail: </strong>
      <a href="mailto: unlutugsan@gmail.com">
        unlutugsan@gmail.com
        </a>
    </div>
    <div>
      <strong>gpg: </strong>
      <a href="http://keys.gnupg.net/pks/lookup?op=get&search=0xB229E37A61B4740E" target="_blank">
        0xB229E37A61B4740E
    </a>
    </div>
  </Layout>
)

export default Contact
