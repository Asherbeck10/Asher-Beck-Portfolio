import React from 'react'
import './style.css'
import {useParams} from 'react-router-dom'
import projectsList from '../../projectsList.json'
import {FaGithub} from 'react-icons/fa'
import {GrDeploy} from 'react-icons/gr'
function ProjectInfo() {
    const {id}=useParams();
   
    const project=projectsList[id]
  return (<div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image} alt={project.name}></img>
    <p><b>Skills:</b>{project.skills}</p>
    <a href={project.gitHub}><FaGithub/></a> 
    <GrDeploy/>

  </div>
    
      
    
  )
}

export default ProjectInfo
