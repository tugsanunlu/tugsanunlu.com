import React from "react";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className={"uk-card uk-card-body uk-box-shadow-large " + (experience.isActive ? "uk-card-primary" : "uk-card-secondary")}>
        <div className="uk-card-badge uk-label">{experience.date}</div>
        <h3 className="uk-card-title uk-margin-top">{experience.company}</h3>
        <div>{experience.title}</div>
      </div>
    </div>
  )
}

export default Experience