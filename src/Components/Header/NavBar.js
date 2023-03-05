import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import './style.css'
import { FaBars} from 'react-icons/fa'



function NavBar() {
    const[expandNavbar,setExpandNavbar]=useState(false)
    // info on which route you in and accordingly  close the navbar
    const location=useLocation()
    useEffect(()=>{
        setExpandNavbar(false)
     
    },[location])
  return (
    //open or close hamburger button
    <div className="navbar" id={expandNavbar ? "open" :"close"}>  
        <div className='toggleButton'>
            <button
            //change the state on click 
            onClick={()=>{
                setExpandNavbar((prev)=> !prev);
            }}
            >    <FaBars/> </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="/project">Projects</Link>
            
        </div>
    </div>
     )

    }


    
      
    

export default NavBar
