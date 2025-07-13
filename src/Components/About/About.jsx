import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/PROFILE.jpg'
import Navbar from '../Navbar/Navbar'

const About = () => {
   
  return (
    
    <div  id='about'className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/> 
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=''></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I specialize in building responsive and user-friendly web applications using modern technologies such as Next.js, React.js, JavaScript, TypeScript, HTML, and CSS. I focus on writing clean, maintainable, and testable code while following best practices in modern frontend development. </p>
                    <p> I have hands-on experience with RESTful APIs and tools like Postman for API testing. I actively contribute to agile development processes, collaborating with Scrum Masters during daily stand-ups, sprint planning, reviews, and retrospectives. Using Jira, I help manage tasks, track progress, and ensure smooth project delivery. I also follow Git workflows using GitHub for version control and collaborate through code reviews and branches. My development approach includes unit testing to ensure reliability and code quality.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML&CSS</p><hr style={{width:"70%"}}></hr></div>
                    <div className="about-skill"> <p>JavaScript & TypeScript</p><hr style={{width:"60%"}}></hr></div>
                    <div className="about-skill"> <p>React JS</p><hr style={{width:"85%"}}></hr></div>
                    <div className="about-skill"> <p>NEXT.JS</p><hr style={{width:"70%"}}></hr></div>
                    <div className="about-skill"> <p>Backend-Node.js,Python</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"> <p>Unit Testing , SQL </p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"> <p>Tools-Postman API,Supabase</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"> <p>Git & GitHub</p><hr style={{width:"80%"}}></hr></div>
                    <div className="about-skill"> <p>Agile-Scrum,Jira</p><hr style={{width:"70%"}}></hr></div>
                                        



                    

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Junior Developer</h1>
                <p>Experience</p>
                </div>
                <hr/>
            <div className="about-achievement">
                <h1>50+</h1>
                <p>Projects Completed</p>
            </div>

            </div>

        </div>
      
   
  )
}

export default About
