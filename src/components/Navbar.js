import '../styles/NavbarStyle.css'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <a href={'#aboutme'}><p>about him</p></a>
            <a href={'#projects'}><p>his projects</p></a>
            <a href={'#contacts'}><p>contact him</p></a>
        </div>
    );
}

export default Navbar;