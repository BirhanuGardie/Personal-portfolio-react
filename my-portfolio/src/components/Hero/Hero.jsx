import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Boboda.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Birhanu Gardie,</span> Full Stack Developer based in Ethiopia</h1>
        <p>I am a full stack web developer from Southwest Ethiopia, with strong expreience in react js</p>
        <div className='hero-action'>
            <div className='hero-connect'>connect with me</div>
            <div className='hero-resume'>My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
