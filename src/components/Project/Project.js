import React from 'react';
import ProjectBtn from '../ProjectBtn/ProjectBtn'

function Project(props){
  return(
    <div className="project-list-row">
      <div className="list-left">
          <figure>
              <img src={props.imgLink} alt=""/>
          </figure>
          <figcaption>{props.projTitle}</figcaption>
      </div>
      <div className="list-right">
          <p>{props.imgDesc}</p>
          <ProjectBtn projLink={props.projLink} noLink = {props.noLink}/>
      </div>
    </div>
  )
}

export default Project