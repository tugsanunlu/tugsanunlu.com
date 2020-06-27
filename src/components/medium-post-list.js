import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import MediumPost from "../components/medium-post"

const Medium = ({ posts }) => {
  const postList = Array.from(posts).map(post => (
    <MediumPost key={post.title} post={post} />
  ))
  return (
    <div className="posts">
      <h3>
        <FontAwesomeIcon icon={["fab", "medium"]} style={{ width: '23px', height: '23px' }} /> Recent Blog Posts
      </h3>
      <div>{postList}</div>
    </div>
  )
}

export default Medium
