import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const Medium = ({ items }) => {
  const itemList = Array.from(items).map(item => (
    <li key={item.title}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fas", "angle-right"]} /> {item.title}
        <div>
          <small>{item.pubDate}</small>
        </div>
        <div>
          <small>{item.categories.map(category => `#${category} `)}</small>
        </div>
      </a>
    </li>
  ))
  return (
    <div className="posts">
      <h3>
        <FontAwesomeIcon icon={["fab", "medium"]} /> Blog Posts
      </h3>
      <ul style={{ listStyleType: "none", marginLeft: "0px" }}>{itemList}</ul>
    </div>
  )
}

export default Medium
