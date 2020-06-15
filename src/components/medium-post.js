import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const MediumPost = ({ post }) => {
  return (
    <div className="medium-posts__post">
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fas", "angle-right"]} /> {post.title}
        <div>
          <small>{post.pubDate}</small>
        </div>
        <div>
          <small>{post.categories.map(category => `#${category} `)}</small>
        </div>
      </a>
    </div>
  )
}

export default MediumPost