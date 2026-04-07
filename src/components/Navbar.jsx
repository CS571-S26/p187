import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
    return (
        <Navbar
            bg="danger"
            variant="dark"
            sticky="top"
            expand="sm"
            collapseOnSelect
        >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Brand as={Link} to="/">
                    P187
                </Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/page2">Page Two</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}