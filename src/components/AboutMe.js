import "../styles/AboutMeStyle.css"
import generals from '../images/icons8-person-90.png';
import edu from '../images/icons8-education-90.png';
import skills from '../images/icons8-book-and-pencil-100.png';
import experience from '../images/icons8-gear-90.png';

const Cards = ({ id, image, title, items }) => {
  return (
    <div className='cards'>
      <div className='title'>
        <img src={image} alt={id} id={id} />
        <h1>{title}</h1>
      </div>
      {
        items.map((item,index)=> <p key={`it-${id}-${index}`}>{item}</p>)
      }
    </div>
  )
}

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>A developer with a cross-interest and passion in cultivating sustainable and cool web-solutions <br/> for your needs.</p>
      <div className="about-me-container">
        <div className={'cards-container'}>
          <Cards
            id={'generals'}
            title={'Generals'}
            image={generals}
            items={[
              'Born: 1999',
              'Nationality: Indonesian',
              'Sport: Table Tennis, Rock Climbing, Futsal',
              'Languages: Bahasa Indonesia, English, German'
            ]}
          />
          <Cards
            id={'education'}
            title={'Education'}
            image={edu}
            items={[
              'Hamburg University of Applied Sciences - Business Information Technology | ongoing',
              'Zero to Mastery Academy - Web Developer Online Course 2022 | completed',
              'Studienkolleg Leibniz University Hanover | graduated in 2019'
            ]}
          />
          <Cards
            id={'skills'}
            title={'Skills'}
            image={skills}
            items={[
              'Frontend: HTML, CSS, JavaScript, TypeScript, React',
              'Backend: Java, PHP, Node, PostgreSQL',
              ''
            ]}
          />
          <div className='cards'>
            <div className={'title'}>
              <img src={experience} alt={'experience'} id={'experience'} />
              <h1>Experience</h1>
            </div>
            <p>MALOA Hamburg | Bowl Server</p>
            <p>PORSERA Sport Event for Indonesia Students in Germany | Creative
              Team</p>
            <p>The Union of Indonesian Students in Germany | Honorary Member</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe