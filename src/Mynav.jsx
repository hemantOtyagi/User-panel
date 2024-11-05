import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../public/vite.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
function Mynav() {
  return (
    <Container fluid>
      <Navbar expand="md" bg="success" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand><img src={logo}></img><span style={{margin:"5px"}}></span>R.D Book Store</Navbar.Brand>
          <Navbar.Toggle area-control="mynav"></Navbar.Toggle>
          <Navbar.Collapse id="mynav">
          <Nav className="me-auto fx-bold" >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Book">Book</Nav.Link>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
            <NavDropdown title="category" id="mynav">
                    <NavDropdown.Item>Food</NavDropdown.Item>
                    <NavDropdown.Item>Fruits</NavDropdown.Item>
                    <NavDropdown.Item>Vegetables</NavDropdown.Item>
                    <NavDropdown.Divider></NavDropdown.Divider>
                    <NavDropdown.Item>Clothes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
                Welcome User
          </Navbar.Text>
        </Container>
      </Navbar>
    </Container>
   
  );
}
export default Mynav;
