import React from 'react'

const Detail = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">프로젝트 타이틀 - {id}</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sunt ipsa inventore unde voluptates ad, quasi eum tempore maiores temporibus odio similique exercitationem nobis numquam magni fugiat minima rerum dolorum!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>별이가 작성함</div>
          <div>2018 / 12 / 23</div>
        </div>
      </div>  
    </div>
  )
}

export default Detail




