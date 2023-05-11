import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar() {
  return (
    <>
      <Navbar fixed="top" bg="dark" className='bg-transparent backdrop-blur-lg' variant="dark">
        <Container className='flex justify-between font-semibold'>
          <Navbar.Brand href="#/">Learn2Earn</Navbar.Brand>
          <Nav className="mr-0">
            <Nav.Link href="#home">Courses</Nav.Link>
            <Nav.Link href="#/specials">Specializations</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#login">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;