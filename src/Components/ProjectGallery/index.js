import React from 'react'

function ProjectGallery({image ,name}) {
  return (
    <div className='projectItem'>
        <div>
            <div style={{ backgroundImage: `url(${image})` }}  className="bgImage"/>
            <h1>{name}</h1>
        </div>
      
    </div>
  )
}

export default ProjectGallery
