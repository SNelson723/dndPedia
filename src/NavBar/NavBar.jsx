import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{height: '5vh'}} className='ps-5'>
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">General</Nav.Link>
        <Nav.Link as={Link} to="/class">Class</Nav.Link>
        {/* Add more Nav.Link components as needed */}
      </Nav>
    </Navbar>
  )
};

export default NavBar;