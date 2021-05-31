import React from "react";
import '../styles/GreetingStyle.css';

class Greeting extends React.Component {
    render() {
        return (
            <div className='greeting'>
                <h1> Selamat Datang!</h1>
                <p> Hello There! I'm David, welcome to my website.</p>
            </div>
        );
    }
}

export default Greeting;