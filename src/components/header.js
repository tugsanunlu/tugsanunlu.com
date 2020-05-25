import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header
    style={{
      background: `#660e1e`,
      marginBottom: `1.45rem`,
    }}
  >
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
            style={{ fontWeight: "500", fontSize: "0.9rem", marginTop: "5px" }}
          >
            {siteSubTitle}
          </div>
        </Link>
      </h1>
      <div className="header__links">
        <Link to="/" activeClassName="header__links--active">
          home
        </Link>
        <Link to="/contact" activeClassName="header__links--active">
          contact
        </Link>
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
