import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import { FaBars} from 'react-icons/fa'


function NavBar() {
  return (
    <div className="navbar">
        <div className='toggleButton'>
            <button><FaBars/> </button>
        </div>
        <div className='"Links'>
            <Link to="/">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="/project">Project</Link>
            
        </div>
    </div>
     )

    }


    
      
    

export default NavBar
