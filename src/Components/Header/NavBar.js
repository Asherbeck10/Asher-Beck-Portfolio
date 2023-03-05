import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'



function NavBar() {
  return (
    <div className="navbar">
        <div className='toggleButton'>
            <button>ReorderIcon </button>
        </div>
        <div className='"Links'>
            <Link to="contact">Contact</Link>
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
        </div>
    </div>
     )

    }


    
      
    

export default NavBar
