import React from 'react'
import './Profile.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Profile = () => {
  return (
    <div id='home' className='profile'>
        <img src={profile_img} alt=''></img>
        <h1><span>I'm Renuka Nandikolla , </span>Fullstack Frontend Developer based in Sweden</h1>
        <p>I am a frontend developer from karlskrona, sweden. I have experinece working with frontend technologies- HTML, CSS, javascript, typescript, react.js, next.js</p>
       <p>  Testing with Postman Api, Git , Github, Agile-Scrum , Jira.</p>
        <div className="profile-action">
            <div className="profile-connect"> <AnchorLink  className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}> Connect with me</p></AnchorLink> </div>
          <div className="profile-resume">
            <a 
              href="https://drive.google.com/file/d/1xxcQPsTTwmLzkPig_a3JO7DJM2ehLzTG/view?usp=sharin" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>           
           </div>
        </div>
      
  )
}

export default Profile
