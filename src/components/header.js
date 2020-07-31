import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import { offCanvasBeforeShow } from "../utils/uikit"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header
    style={{
      background: `#660e1e`,
      marginBottom: `1.45rem`,
    }}
    className="uk-margin-medium-bottom uk-box-shadow-xlarge"
    data-uk-sticky="top: 200; animation: uk-animation-slide-top;"
  >
    <div className="header__links">
      <FontAwesomeIcon icon={["fas", "bars"]} data-uk-toggle="target: #offcanvas-push" onClick={offCanvasBeforeShow} />
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <div
            style={{ fontWeight: "500", fontSize: "1.1rem", marginTop: "5px" }}
          >
            {siteSubTitle}
          </div>
        </Link>
      </h1>
    </div>

    <div id="offcanvas-push" data-uk-offcanvas="mode: push;">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li className="uk-active">
            <Link to="/">home</Link>
          </li>
          <li className="uk-active">
            <Link to="/work-experience">work experience</Link>
          </li>
          <li className="uk-active">
            <Link to="/education">education</Link>
          </li>
          <li className="uk-active">
            <Link to="/volunteer-experience">volunteer experience</Link>
          </li>
          <li className="uk-active">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
