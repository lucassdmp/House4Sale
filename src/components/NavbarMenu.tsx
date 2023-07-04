import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarMenu() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary bg-color-black ">
            <Container>
                <Navbar.Brand href="/">
                    <img width={30} height={30} src="./src/assets/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link  href="/"><p className="font-weight-bold text-dark">Home</p></Nav.Link>
                        <Nav.Link href="/catalog"><p className="font-weight-bold text-dark">Catalog</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;