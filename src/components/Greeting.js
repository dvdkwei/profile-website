import React from "react";
import '../styles/GreetingStyle.css';

class Greeting extends React.Component {
    render() {
        return (
            <div className='greeting' id="greeting">
                <h1>David Kurniadi Weinardy</h1>
                <p>{'web developer </>'}</p>
                <p>business information system student 📈</p>
                <p>based in hamburg, germany 🚢</p>
            </div>
        );
    }
}

export default Greeting;