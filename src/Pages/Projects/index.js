import React from 'react'
import ProjectGallery from '../../Components/ProjectGallery'
import Scheduler from '../../assets/schedular.png'
import './style.css'
//çimport projectList from '../../projectsList.json'
function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        <ProjectGallery name="Schedular" image={Scheduler}/>
      </div>

    </div>

    
      
    
  )
}

export default Projects
