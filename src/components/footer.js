import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const accounts = [
  {
    faCategory: "fab",
    faIcon: "twitter",
    url: "https://twitter.com/tugsanunlu",
  },
  {
    faCategory: "fab",
    faIcon: "instagram",
    url: "https://instagram.com/tugsanunlu",
  },
  {
    faCategory: "fab",
    faIcon: "github",
    url: "https://github.com/tugsanunlu",
  },
  {
    faCategory: "fab",
    faIcon: "medium",
    url: "https://medium.com/@tugsanunlu",
  },
  {
    faCategory: "fab",
    faIcon: "keybase",
    url: "https://keybase.io/tugsanunlu",
  },
  {
    faCategory: "fab",
    faIcon: "linkedin",
    url: "https://www.linkedin.com/in/tugsanunlu",
  },
  {
    faCategory: "fas",
    faIcon: "theater-masks",
    url: "https://tiyatrogunlugu.com",
  },
  {
    faCategory: "fas",
    faIcon: "envelope",
    url: "mailto:unlutugsan@gmail.com",
  },
]

const Footer = () => (
  <footer>
    <div className="footer_links">
      {accounts.map(account => (
        <a
          href={account.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={[account.faCategory, account.faIcon]} />
        </a>
      ))}
    </div>
  </footer>
)

export default Footer
