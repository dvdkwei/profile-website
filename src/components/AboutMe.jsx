import "../styles/AboutMeStyle.css"
import generals from '../images/icons8-person-90.png';
import edu from '../images/icons8-education-90.png';
import skills from '../images/icons8-book-and-pencil-100.png';
import experience from '../images/icons8-gear-90.png';

const ProfileCards = ({ id, image, title, items }) => {
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
      <p>
        A developer with a 
        <strong> cross-interest </strong> and 
        <strong> passion </strong> 
        in cultivating 
        <strong> sustainable</strong> and 
        <strong> cool</strong> web-solutions 
        <strong> for your needs</strong>.
      </p>
      <div className="about-me-container">
        <div className={'cards-container'}>
          <ProfileCards
            id={'generals'}
            title={'Generals'}
            image={generals}
            items={[
              `Age: ${new Date().getFullYear() - 1999}`,
              'Born: February 1999',
              'Nationality: Indonesian',
              'Sport: Table Tennis, Bouldering, Futsal',
              'Languages: Bahasa Indonesia, English, German'
            ]}
          />
          <ProfileCards
            id={'education'}
            title={'Education'}
            image={edu}
            items={[
              'Hamburg University of Applied Sciences - B.Sc. Business Information System | ongoing',
              'Zero to Mastery Academy - Web Developer Online Course 2022 | completed',
              'Studienkolleg Leibniz University Hanover | graduated in 2019'
            ]}
          />
          <ProfileCards
            id={'skills'}
            title={'Skills'}
            image={skills}
            items={[
              'Frontend: HTML, CSS, JavaScript, TypeScript, React, Tailwind, Less, Wordpress, Webflow',
              'Backend: Java, PHP, Node, PostgreSQL',
              'Deployment: Netlify, Docker, UNIX Environment, Webpack, Vite, Parcell',
              'Day-to-day: Excel, Figma, Jira'
            ]}
          />
          <ProfileCards
            id={'exp'}
            title={'Work Experiences'}
            image={experience}
            items={[
              'White Label eCommerce | Working Student Frontend Developer | 2022 - Now',
              'MALOA Hamburg | Working Student Server | 2019 - 2021',
              'The Union of Indonesian Students in Hanover, Germany | Honorary Member | 2018 - 2019'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe