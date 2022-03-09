import React from "react";
import "../styles/ContactStyle.css";
import github from "../icons8-github-90.png";
import insta from "../icons8-instagram-96.png";
import link from "../icons8-linkedin-96.png";
import face from "../icons8-facebook-90.png";
import mail from "../icons8-email-96.png";

class Contact extends React.Component {
    openInNewTab = (url) => {
        window.open(url, '_blank').focus();
    }

    render() {
        return (
            <div className={'contact'}>
                <div className={'contact-box'}>
                    <h1>Please say &#128075;!</h1>
                    <div className='social-logos'>
                        <img src={mail} alt={'mailto:david.kurniadi.weinardy@outlook.com'}
                             onClick={() => this.openInNewTab('mailto:david.kurniadi.weinardy@outlook.com')}/>
                        <img src={github} alt={'https://github.com/dvdkwei'}
                             onClick={() => this.openInNewTab('https://github.com/dvdkwei')}/>
                        <img src={link}
                             alt={'https://www.linkedin.com/in/david-kurniadi-weinardy/'}
                             onClick={() => this.openInNewTab('https://www.linkedin.com/in/david-kurniadi-weinardy-01a7661a1/')}/>
                        <img src={insta} alt={'https://www.instagram.com/dvdkwei/'}
                             onClick={() => this.openInNewTab('https://www.instagram.com/dvdkwei/')}/>
                        <img src={face} alt={'https://www.facebook.com/davidkwei10/'}
                             onClick={() => this.openInNewTab('https://www.facebook.com/davidkwei10/')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;