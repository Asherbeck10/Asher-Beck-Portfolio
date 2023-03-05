import React from 'react'
import ProjectGallery from '../../Components/ProjectGallery'
import './style.css'
import projectsList from '../../projectsList.json'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {projectsList.map((project)=>{
          return <ProjectGallery name={project.name} image={project.image}/>
        })}
      </div>

    </div>

    
      
    
  )
}

export default Projects
