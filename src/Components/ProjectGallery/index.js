import React from 'react'
import{useNavigate} from 'react-router-dom'

function ProjectGallery({image ,name,id}) {
  const navigate=useNavigate();
  return (
    <div className='projectItem'
    onClick={()=>{
      navigate("/project/" + id)
    }}>
      {/* looping the project list */}
        <div>
            <div style={{ backgroundImage: `url(${image})` }}  className="bgImage"/>
            <h1>{name}</h1>
        </div>
      
    </div>
  )
}

export default ProjectGallery
