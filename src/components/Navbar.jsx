import '../styles/NavbarStyle.css'

const Navbar = () => {
    return (
        <div className='nav-bar' id='menu'>
            <a href={'#aboutme'}>about me</a>
            <a href={'#projects'}>my projects</a>
            <a href={'#contacts'}>contact</a>
        </div>
    );
}

export default Navbar;