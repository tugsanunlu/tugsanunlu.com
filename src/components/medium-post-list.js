import React from "react"
import MediumPost from "../components/medium-post"

const Medium = ({ posts }) => {
  const postList = Array.from(posts).map(post => (
    <MediumPost key={post.title} post={post} />
  ))
  return (
    <div className="posts">
      <h3>
        recent blog posts
      </h3>
      <div>{postList}</div>
    </div>
  )
}

export default Medium
