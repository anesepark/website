import React from 'react';
import ProjectBtn from '../ProjectBtn/ProjectBtn'
import './sidebar.scss'

function Sidebar(){
  return(
    <aside className="sidebar">
      <figure>
          <img src="https://img.icons8.com/pastel-glyph/2x/person-male--v2.png" alt=""/>
      </figure>
      <div className="sidebar-description">
        <div className="sidebar-figcaption">
          <figcaption>Chae Youn "Anese" Park</figcaption>
          <figcaption>Rhodes College 2022</figcaption>
        </div>
        <div className="sidebar-code">
          <p>Feel free to take a peek at the source code of this website down below:</p>
          <ProjectBtn projLink = {""} noLink = {false}/>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar