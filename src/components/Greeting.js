import React from "react";
import '../styles/GreetingStyle.css';

class Greeting extends React.Component {
    render() {
        return (
            <div className='greet'>
                <div className='greeting'>
                    <h1> Selamat Datang! &#129305;</h1>
                    <p> Translated: Hello There!</p>
                </div>
            </div>
        );
    }
}

export default Greeting;