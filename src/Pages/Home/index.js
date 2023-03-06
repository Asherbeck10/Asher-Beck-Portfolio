import React from 'react';
import './style.css';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import{AiTwotoneMail,AiFillPhone} from 'react-icons/ai'
import {FcDocument} from 'react-icons/fc'
import myPhoto from '../../assets/my_photo.jpeg'
import CV from '../../assets/CV.pdf'
function Home() {
  return (
    <div className='"home'>
      <header className="header">
        <img src={myPhoto} className="Profile-pic" alt="Profile" />
      </header>
      <div className="about">
      <h2>Hello, My Name is Asher</h2>
      <div className='prompt'>
        <div>
        <p>I like to build applications that will make your life easier  </p>
        </div>

        
        
        <a href="mailto:example@example.com"><AiTwotoneMail/></a>
         <a href="tel:+1234567890"><AiFillPhone/></a>

        <a href="https://github.com/Asherbeck10" target="_blank"  rel="noreferrer"><FaGithub/></a>
       <a href="https://www.linkedin.com/in/asher-beck-276454259/" target="_blank"  rel="noreferrer" > <FaLinkedin/></a>
       <a href={CV} target="_blank"  rel="noreferrer"> <FcDocument/></a>
      
      </div>
      </div>
      {/* my skills  */}
    
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <p>ReactJS, HTML, CSS, Bootstrap,NPM,Git</p>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <p>Django, NodeJS,SQL,Git</p>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <p>JavaScript,Python</p>
          </li>


        </ol>
        </div>  

    </div>
        
      
   
  )
}

export default Home

