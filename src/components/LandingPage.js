import React from "react";
import '../styles/LandingPageStyle.css'
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import profPic from "../profile-picture-1.png";

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page'>
                <div id='menu'>
                    <Navbar/>
                </div>
                <div>
                    <section className='header'>
                        <div id='greeting'>
                            <Greeting/>
                        </div>
                        <div className='header-image'/>
                        <img src={profPic} alt='profile' className={'prof-pic'}/>
                    </section>
                    <div className='page-body'>
                        <section id='aboutme'>
                            <AboutMe/>
                        </section>
                        <section id='projects'>
                            <Projects/>
                        </section>
                        <section id='contacts'>
                            <Contact/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;