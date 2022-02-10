import "../styles/AboutMeStyle.css"
import profPic from '../profile-picture-1.png';
import generals from '../icons8-person-90.png';
import edu from '../icons8-education-90.png';
import skills from '../icons8-book-and-pencil-100.png';
import experience from '../icons8-gear-90.png';

const AboutMe = () => {
    return (
        <div className="about-me-1-container">
            <img src={profPic} alt='profile' className={'prof-pic'}/>
            <div className={'cards-container'}>
                <div className='cards generals'>
                    <div className={'title'}>
                        <img src={generals} alt={'generals'} id={'generals'}/>
                        <h1>Generals</h1>
                    </div>
                    <p>Born: 1999</p>
                    <p>Nationality: Indonesian</p>
                    <p>Food: Ramen</p>
                    <p>Sport: Table Tennis</p>
                    <p>Languages: <br/> Bahasa Indonesia, English, German, Javanese</p>
                </div>
                <div className='cards'>
                    <div className={'title'}>
                        <img src={edu} alt={'education'} id={'education'}/>
                        <h1>Education</h1>
                    </div>
                    <p>Hamburg University of Applied Sciences - Business Information
                        Technology | ongoing </p>
                    <p>Zero to Mastery Academy - Web Developer Online Course 2022 |
                        completed</p>
                    <p>Studienkolleg Leibniz University Hanover | graduated in 2019</p>
                    <p>St. Louis 1 Catholic High School in Surabaya, ID | graduated in
                        2017</p>
                </div>
                <div className='cards'>
                    <div className={'title'}>
                        <img src={skills} alt={'skills'} id={'skills'}/>
                        <h1>Skills</h1>
                    </div>
                    <p>Electronic Data Processing: <br/>
                        Microsoft Office (Word, Excel, Powerpoint), Photoshop, Figma</p>
                    <p>Programming languages: <br/>
                        SQL, Java, HTML, CSS, JavaScript, Basic MongoDB</p>
                </div>
                <div className='cards'>
                    <div className={'title'}>
                        <img src={experience} alt={'experience'} id={'experience'}/>
                        <h1>Experience</h1>
                    </div>
                    <p>MALOA Hamburg | Bowl Server</p>
                    <p>PORSERA Sport Event for Indonesia Students in Germany | Creative
                        Team</p>
                    <p>The Union of Indonesian Students in Germany | Honorary Member</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;