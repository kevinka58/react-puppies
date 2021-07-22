import { Link } from 'react-router-dom';

function NavBar() {
    return ( <nav>
        <Link to="/puppies">Puppies</Link>
        &nbsp; | &nbsp;
        <Link to="/puppies/new">New Puppies</Link>
    </nav>
    )
}

export default NavBar;
