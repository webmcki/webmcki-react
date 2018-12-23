import React from 'react'
import Summary from './Summary'
import { Link } from 'react-router-dom'

const List = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/'+project.id}>
          <Summary project={project} key={project.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default List



