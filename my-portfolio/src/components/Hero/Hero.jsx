import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Boboda.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Birhanu Gardie,</span> Full Stack Developer based in Ethiopia</h1>
        <p>I am a full stack web developer from Southwest Ethiopia, with strong expreience in JavaScript, React JS, 
          Node JS, and with MongoDB and MySql databases.
        </p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset = {50} href = '#contact'   >connect with me</AnchorLink></div>
            <div className='hero-resume'>My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
