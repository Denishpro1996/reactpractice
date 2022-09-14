import React from 'react'
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className='aboutmain'>
      <div className='about'>
        <span>
          <h2 className='abth1'>Who We Are</h2>
        </span>
        <div className='image1'>
          <img
            src='https://assets.ajio.com/medias/sys_master/images/images/h5e/hfc/11339012800542/who-we-are-desktop.jpg'
            alt=''
          />
        </div>
        <div className='paragraph'>
          <p>
            With the trendiest, freshest, and most unique styles from across
            India and the world, AJIO invites you to express your personal style
            fearlessly, and with a confidence and optimism that cannot be easily
            shaken.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;