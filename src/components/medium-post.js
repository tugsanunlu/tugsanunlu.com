import React from "react"

const MediumPost = ({ post }) => {
  return (
    <div className="uk-width-1-1@m uk-margin">
      <div className="uk-card uk-card-default">
        <div data-uk-grid>
          <div className="uk-width-3-5@m">
            <div className="uk-card-body">
              <h3 className="uk-card-title">[tr] {post.title}</h3>
              <div>{post.categories.map(category => `#${category} `)}</div>
              <div className="uk-margin">{post.pubDate.split(' ')[0]}</div>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <button className="uk-button uk-button-secondary">READ</button>
              </a>
            </div>
          </div>
          <div className="uk-width-2-5@m">
            <img src={post.thumbnail} alt={post.title} className="uk-padding" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediumPost