import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarMenu() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary bg-color-black">
            <Container>
                <Navbar.Brand href="/">
                    <img width={30} height={30} src="./src/assets/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/catalog">Catalog</Nav.Link>
                        <NavDropdown title="Contact" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/sellwithus">Sell With Us</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;