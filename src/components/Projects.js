import '../styles/Projects.css';
import tableau from '../images/ezgif-6-b1490ea6528d.gif';
import robo from '../images/ezgif-6-ecc129c8f1d3.gif';
import login from '../images/login.gif';

const Project = ({id, image, link, title, text}) => {
  return (
    <div className='project' id={id}>
      <img src={image} alt={`img-${id}`} />
      <div id='project-text'>
        <a href={link}>
          <h2>{title}</h2>
        </a>
        <p>{text}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>My Projects</h1>
      <Project 
        id={'project-1'}
        image={tableau}
        link={'https://github.com/dvdkwei/mondrian-dirt-bikes'}
        title={'Dashboard Project'}
        text={
          'Both with his acquaintance, they executed a database analytics project with the usage of SQL, Mondrian Schema/Server, Spoon Pentaho ETL Tool, and Tableau as an interface to the user.'
        }
      />
      <Project 
        id={'project-2'}
        image={robo}
        link={'https://github.com/dvdkwei/robofriends'}
        title={'Robofriends Project'}
        text={
          'As his interest in learning frontend and user interface, he made a sample project of real time filtering/ searching. This project includes HTML, CSS, JavaScript, and React, also he learned how to properly use API in JavaScript.'
        }
      />
      <Project 
        id={'project-3'}
        image={login}
        link={'https://github.com/dvdkwei/face-recognition-ui'}
        title={'Login Register Project'}
        text={
          'A simple login and register persistent account UI with bcrypt as password encryptor. '
        }
      />
    </div>
  );
}

export default Projects;