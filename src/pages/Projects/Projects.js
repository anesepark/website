import React, { useEffect, useState } from 'react';
import Project from '../../components/Project/Project'
import Data from './data'
import './projects.scss'

function Projects() {
    
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        const projComponents = Data.map(prj => <Project imgLink={prj.imgLink} projLink={prj.projLink} projTitle={prj.projTitle} imgDesc={prj.imgDesc} />) 
        setInfo(projComponents)
    }, []);
    
    return (
        <div id="projects" className="tab-body" style={{ position: 'relative' }}>
            <div id="top" style={{ position: 'absolute', top: '0' }}></div>
            <h3>projects in progress</h3>
                {info}
            <br/><br/>
            <a id="scroll" href="#top">scroll to top</a>

        </div>
    )
}

export default Projects