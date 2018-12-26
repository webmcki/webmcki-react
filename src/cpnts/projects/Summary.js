import React from 'react'

const Summary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          {project.authorFirstName} {project.authorLastName} 님이 작성
        </p>
        <p className="grey-text">2018 / 12 / 23</p>
      </div>
    </div>
  )
}

export default Summary
