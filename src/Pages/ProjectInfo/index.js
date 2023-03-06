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
    <p><b>About:</b>{project.about}</p>
    <p><b>Skills:</b>{project.skills}</p>
    <div style={{ display: 'flex', justifyContent:'space-between' }}>
    <a href={project.gitHub}  target="_blank"  rel="noreferrer"><FaGithub/></a> 
    <a href={project.website}  target="_blank"  rel="noreferrer"><GrDeploy/></a> 
      </div>
    

  </div>
    
      
    
  )
}

export default ProjectInfo
