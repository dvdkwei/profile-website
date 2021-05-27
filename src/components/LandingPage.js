import React from "react";
import '../styles/LandingPageStyle.css'
import Greeting from "./Greeting";

class LandingPage extends React.Component {
    render() {
        return(
        <div className='landing-page'>
            <header>
                <div className='nav-bar'>
                    <p>home</p>
                    <p>|</p>
                    <p>about me</p>
                    <p>|</p>
                    <p>i'm interested</p>
                </div>
                <div className='header-image'/>
            </header>
            <div className='page-body'>
                <Greeting/>
            </div>
        </div>
        )
    }
}

export default LandingPage;