import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import UIkit from "uikit"

/* pass callback queue for offcanvas close issue
TODO: alternative */
const offCanvasClose = () => {
  setTimeout(() => {
    UIkit.offcanvas('#offcanvas-push').hide();
  }, 100);
}

const Header = ({ siteTitle, siteSubTitle }) => (
  <header
    style={{
      background: `#660e1e`,
      marginBottom: `1.45rem`,
    }}
    className="uk-margin-medium-bottom uk-box-shadow-large"
  >
    <div className="header__links">
      <FontAwesomeIcon icon={["fas", "bars"]} data-uk-toggle="target: #offcanvas-push" />
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

    <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true;">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li className="uk-active">
            <Link to="/" onClick={offCanvasClose}>home</Link>
          </li>
          <li className="uk-active">
            <Link to="/work-experience" onClick={offCanvasClose}>work experience</Link>
          </li>
          <li className="uk-active">
            <Link to="/contact" onClick={offCanvasClose}>contact</Link>
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
