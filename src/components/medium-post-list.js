import React from "react"
import MediumPost from "../components/medium-post"

const Medium = ({ posts }) => {
  const postList = Array.from(posts).map(post => (
    <MediumPost key={post.title} post={post} />
  ))
  return (
    <div className="posts">
      <h2>recent blog posts</h2>
      <div data-uk-grid>{postList}</div>
      <div className="uk-text-center">
        <a href="https://medium.com/@tugsanunlu" target="_blank" rel="noopener noreferrer">
          <button className="uk-button uk-button-secondary">SEE ALL BLOG POSTS</button>
        </a>
      </div>
    </div>
  )
}

export default Medium
