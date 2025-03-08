import React from 'react'
import './About.css'
import bobo from '../../assets/bobo.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
      <div className='about-sections'>
        <div className="about-left">
            <img src={bobo} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I have a solid skill developing a scalable web application with latest technologies</p>
                <p>My passion for full stack development is not only reflect my skill but also enthusiasm and dedication I can bring to each project</p>

            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>

      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
