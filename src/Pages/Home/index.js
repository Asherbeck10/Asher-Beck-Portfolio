import React from 'react';
import './style.css';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import{AiTwotoneMail} from 'react-icons/ai'
import {FcDocument} from 'react-icons/fc'
function Home() {
  return (
    <div className='"home'>
      <div className="about">
      <h2>Hello, My Name is Asher</h2>
      <div className='prompt'>
        <p>here will be something about me </p>
        <a href="https://github.com/Asherbeck10" target="_blank"  rel="noreferrer"><FaGithub/></a>
        <AiTwotoneMail/>
       <a href="https://www.linkedin.com/in/asher-beck-276454259/" target="_blank"  rel="noreferrer" > <FaLinkedin/></a>
        <FcDocument/>
          
      </div>

      </div>
    </div>
      
   
  )
}

export default Home

