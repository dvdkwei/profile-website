import React from "react";
import '../styles/GreetingStyle.css';

class Greeting extends React.Component {
    render() {
        return (
            <div className='greeting'>
                <h1>David Kurniadi Weinardy</h1>
                <p>a business information system student, so far</p>
                <p>based in hamburg, germany</p>
            </div>
        );
    }
}

export default Greeting;