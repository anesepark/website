import React from 'react';
import Home from './Home/Home.js';
import Projects from './Projects/Projects.js';
import AboutMe from './AboutMe/AboutMe.js';
import ContactMe from './ContactMe/ContactMe.js';
import Sidebar from '../components/Sidebar/Sidebar.js';

function App() {
  const [clickArray, setClickArray] = React.useState([true, false, false, false]);
  const [randNum, setRandNum] = React.useState(0);

  const clickTab = (tabID) => {
    setRandNum(Math.floor(Math.random() * (5)));
    let updatedTab = [false, false, false, false];

    updatedTab[tabID] = true;

    setClickArray(updatedTab);
  }
  return (
    <>
      <Sidebar />

      <div className="tabs">
        {clickArray[0] ? <Home rng={randNum} /> : null}
        {clickArray[1] ? <Projects /> : null}
        {clickArray[2] ? <AboutMe /> : null}
        {clickArray[3] ? <ContactMe /> : null}

        <div className="tab-controls">
          <button onClick={() => clickTab(0)} className={clickArray[0] ? "active" : null}>home</button>
          <button onClick={() => clickTab(1)} className={clickArray[1] ? "active" : null}>projects</button>
          <button onClick={() => clickTab(2)} className={clickArray[2] ? "active" : null}>about me</button>
          <button onClick={() => clickTab(3)} className={clickArray[3] ? "active" : null}>contact</button>
        </div>
      </div>
    </>
  )
}

export default App