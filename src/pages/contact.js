import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h2>contact</h2>
    <div data-uk-grid>
      <div className="uk-width-1-2@m">
        <div className="uk-card uk-card-default">
          <div className="uk-card-body">
            <h3 className="uk-card-title">e-mail</h3>
            <a href="mailto: unlutugsan@gmail.com">unlutugsan@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="uk-width-1-2@m">
        <div className="uk-card uk-card-default">
          <div className="uk-card-body">
            <h3 className="uk-card-title">gpg</h3>
            <a
              href="http://keys.gnupg.net/pks/lookup?op=get&search=0xB229E37A61B4740E"
              target="_blank"
              rel="noopener noreferrer"
            >
              0xb229e37a61b4740e
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
