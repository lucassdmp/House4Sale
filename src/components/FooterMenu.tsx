import { Container, Row, Col } from 'react-bootstrap';
import '../styles/FooterMenu.css'
import FilterForm from './FilterForm';

function FooterMenu() {
    // get today's year
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <Container fluid className="footer-menu text-center bg-dark pt-5">
                <Row className='d-flex justify-content-start mb-3'>
                    <Col className="d-flex flex-column m-0 p-0">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Sell With Us</a>
                    </Col>
                    <Col className="d-flex flex-column m-0 p-0">
                        <h4>Social Medias</h4>
                        <a href="#">Facebook</a>
                        <a href="#">Email</a>
                        <a href="#">Instagram</a>
                    </Col>
                    <Col></Col>
                    <Col>
                        <FilterForm />
                    </Col>
                </Row>
                <Row className='text-dark'>
                    <Col className='m-0 p-0'>
                        <p>© 2023 - {year} All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FooterMenu;