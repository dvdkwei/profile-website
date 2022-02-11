import '../styles/Projects.css';
import tableau from '../ezgif-6-b1490ea6528d.gif';
import robo from '../ezgif-6-ecc129c8f1d3.gif';
import login from '../login.gif';

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>His Projects</h1>
            <div className='project' id='project-1'>
                <img src={tableau} alt={'tableau'}/>
                <div id='project-text'>
                    <a href='https://github.com/dvdkwei/mondrian-dirt-bikes'><h2>Dashboard
                        Project</h2></a>
                    <p>Both with his acquaintance, they executed a database analytics project with
                        the usage of SQL, Mondrian Schema/Server, Spoon Pentaho ETL Tool, and
                        Tableau as
                        an interface to the user.</p>
                </div>
            </div>
            <div className='project' id='project-2'>
                <img src={robo} alt={'robo'}/>
                <div id='project-text'>
                    <a href={'https://github.com/dvdkwei/robofriends'}>
                        <h2>Robofriends Project</h2>
                    </a>
                    <p>As his interest in learning frontend and user interface, he made a sample
                        project
                        of real time filtering/ searching. This project includes HTML, CSS,
                        JavaScript,
                        and React, also he learned how to properly use API in JavaScript.</p>
                </div>
            </div>
            <div className='project' id='project-3'>
                <img src={login} alt={'list'}/>
                <div id='project-text'>
                    <a href={'https://github.com/dvdkwei/crud-js'}>
                        <h2>Login Register Project</h2>
                    </a>
                    <p>A simple login and register persistent account UI with bcrypt as password encryptor.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;