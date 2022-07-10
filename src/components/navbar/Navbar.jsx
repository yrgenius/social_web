import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
        <div>
          <a className="nav-link" href="#" >Profile</a>
        </div>
        <div>
          <a className="nav-link" href="#" >Messages</a>
        </div>
        <div>
          <a className="nav-link" href="#" >News</a>
        </div>
        <div>
          <a className="nav-link" href="#" >Music</a>
        </div>
        <div>
          <a className="nav-link" href="#" >Settings</a>
        </div>
      </nav>    
    );
}

export default Navbar;