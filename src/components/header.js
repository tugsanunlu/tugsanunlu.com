import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import { offCanvasBeforeShow } from "../utils/uikit"
import { globalHistory } from "@reach/router"

const Header = ({ siteTitle, siteSubTitle }) => {

  const [activePath, setActivePath] = useState(0);
  useEffect(() => {
    setActivePath(globalHistory.location.pathname);
  }, [])

  const menus = [
    { text: "home", path: "/" },
    { text: "work experience", path: "/work-experience" },
    { text: "education", path: "/education" },
    { text: "volunteer experience", path: "/volunteer-experience" },
    { text: "contact", path: "/contact" }
  ]

  return (
    <header
      style={{
        background: `#660e1e`,
        marginBottom: `1.45rem`,
      }}
      className="uk-margin-medium-bottom uk-box-shadow-xlarge"
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
            {menus.map(menu =>
              <li li className={activePath === menu.path ? 'uk-active' : ''}>
                <Link to={menu.path}>{menu.text}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
