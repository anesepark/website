import React from 'react';
import './AboutMe.scss';

function AboutMe(){
  function onClick(){
    window.open(
      'https://drive.google.com/file/d/1fgTJpxKBbjE1c8p4qFeC1mwhlYIi9WMU/view?usp=sharing', '_blank'
    );
  }
  return(
    <div className = "tab-body">
      <h2>Hello! My name is Anese Park.</h2>
      <br />

      <figure className = "drawn-component">
        <img src="https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/default.svg" alt=""/>
      </figure>
      <br />

      <p>I'm currently a senior majoring in Computer Science at Rhodes College, with an interest in distributed systems as well as general front-end web development. I love working in small tight-knit teams where I can personally develop meaningful connections with team members and constantly receive feedback. I value communication, and thrive working in environments that encourage employees to constantly ask questions.</p>

      <br />
      <figure className = "drawn-component">
        <img src="https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/default.svg" alt=""/>
      </figure>
      <br />

      <p>When I'm not coding, you can find me playing video games, drawing, reading books, learning new languages (currently learning Japanese), and watching marine biology documentaries. I've recently invested in a monthly fish-themed enamel pin club, and regard marine biology as one of my biggest passions along with computer science!</p>
      
      <br />

      <div className = "resume-container">
        <p>Click here to view my resume!</p>
        <button onClick = {onClick}> Resume</button>
      </div>

    </div>
  )
}

export default AboutMe