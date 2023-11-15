import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './SideNavbarComp.css';

function SideNavbarComp() {

    return (
        <Container fluid>
        <Row>
        <Col lg={3} md={4} sm={4} xs={12}>
            <Navbar expand="" className="bg-body-tertiary">
                    <Nav className="">
                    <NavDropdown title="Quick Links" id="collapsible-nav-dropdown">                   
                        <Nav.Link href="#1"><i class="fa fa-home"></i> Home</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#2"><i class="fa fa-clock"></i> About Us</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#3"><i class="fa fa-circle"></i> Our Services</Nav.Link>
                        <NavDropdown.Divider />                                         
                    </NavDropdown>
                    <NavDropdown.Divider />
                    <NavDropdown title="Sports" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Submenu 1</NavDropdown.Item>                      
                        <NavDropdown.Item href="#action/3.2">Submenu 2</NavDropdown.Item>                       
                        <NavDropdown.Item href="#action/3.3">Submenu 3</NavDropdown.Item>                        
                        <NavDropdown.Item href="#action/3.4">Submenu 4</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Submenu 5</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Submenu 6</NavDropdown.Item>                       
                        <NavDropdown.Item href="#action/3.4">Submenu 7</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#1">Home</Nav.Link>
                    <Nav.Link href="#2">About Us</Nav.Link>
                    <Nav.Link href="#2">Contact Us</Nav.Link>
                    </Nav>            
                </Navbar>
            </Col>
        
            </Row>
          </Container>
        
      );

}

export default SideNavbarComp;
