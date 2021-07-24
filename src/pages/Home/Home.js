import React from 'react';
import './home.scss'

function Home(props){
  const pictureStates = [
    "https://64.media.tumblr.com/171d80fcbeda532c316428fedb18436d/tumblr_inline_mou3cbXqai1s1w9gx.gif",
    "https://i.pinimg.com/originals/be/28/bd/be28bd4c2cb14e7c7ac1b704348ab721.gif",
    "https://i.pinimg.com/originals/0c/e3/03/0ce303a3317250997ee572103717fe49.gif",
    "https://i.pinimg.com/originals/98/3a/a3/983aa30e9dc370d1ca877db5e752b17d.gif",
    "https://i.pinimg.com/originals/2f/55/36/2f5536ead8c841d4172fc83cec60a34b.gif"
  ];
  const textStates = [
    "playing with a cat",
    "studying", 
    "playing video games",
    "looking at YouTube videos",
    "watching a marine biology documentary"
  ]

  return(
    <div id="home" className= "tab-body">
      <h1>Currently {textStates[props.rng]} </h1>
      <figure>
          <img src= { pictureStates[props.rng] } alt = ""/>
      </figure>

      <h3>updates</h3>
      <li>finished layout</li>
      <li>created home page</li>
      <li>converted pages into React components</li>
      <li>finished home page and tabs logic in React</li>
    </div>
  )
}

export default Home