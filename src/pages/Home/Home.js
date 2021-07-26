import React from 'react';
import './home.scss'

function Home(props){
  const pictureStates = [
    "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg",
    "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg",
    "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg",
    "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg",
    "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg"
  ];
  const textStates = [
    "playing with a cat",
    "studying", 
    "playing video games",
    "reading a book",
    "watching a marine biology documentary"
  ]

  return(
    <div id="home" className= "tab-body">
      <h1>Currently {textStates[props.rng]} </h1>
      <figure>
          <img className = "status-image" src= { pictureStates[props.rng] } alt = ""/>
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