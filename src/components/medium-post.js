import React from "react"

const MediumPost = ({ post }) => {
  return (
    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" data-uk-grid>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{post.title}</h3>
          <div>{post.categories.map(category => `#${category} `)}</div>
          <div className="uk-margin">{post.pubDate.split(' ')[0]}</div>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <button className="uk-button uk-button-secondary">READ</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MediumPost