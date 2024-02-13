import React, { useState } from "react";
import '../styles/LandingPageStyle.css'
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import profPic from '../images/profile_picture.png';

const LandingPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className='landing-page'>
      <Navbar />
      <>
        <div className='header'>
          <Greeting />
          <img
            src={profPic}
            alt='profile'
            className={isImageLoaded ? 'prof-pic' : 'img-hide'}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        <div className='page-body'>
          <section id='aboutme'>
            <AboutMe />
          </section>
          <section id='projects'>
            <Projects />
          </section>
          <section id='contacts'>
            <Contact />
          </section>
        </div>
      </>
    </div>
  )
}

export default LandingPage;