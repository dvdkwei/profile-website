import React from "react";
import '../styles/LandingPageStyle.css'
import Greeting from "./Greeting";
import Navbar from "./Navbar";

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page'>
                <div className='header-image'>
                    <div id='navbar'><Navbar/></div>
                    <br/>
                    <div id='greeting'><Greeting/></div>
                    <br/>
                </div>
                {/*<div className='page-body'>*/}

                {/*</div>*/}
            </div>
        )
    }
}

export default LandingPage;