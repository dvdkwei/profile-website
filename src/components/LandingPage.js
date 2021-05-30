import React from "react";
import '../styles/LandingPageStyle.css'
import Greeting from "./Greeting";
import Navbar from "./Navbar";

class LandingPage extends React.Component {
    render() {
        return(
        <div className='landing-page'>
            <header>
                <div className='header-image'>
                    <Greeting/>
                </div>
            </header>

            <div className='page-body'>
                <Navbar/>
            </div>
        </div>
        )
    }
}

export default LandingPage;