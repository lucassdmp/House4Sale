import { Container, Dropdown, Row, Col } from "react-bootstrap";
import HouseCard from "./HouseCard";
import "../styles/CatalogPage.css"

function CatalogPage() {
    return (
        <Container className="text-center mt-5 mb-5">
            <h1 className="text-dark font-weight-normal mb-5">Our House Marketplace</h1>
            <div className="text-end d-flex justfy-content-sb">
                <Dropdown className="">
                    <Dropdown.Toggle id="dropdown-filter" className="text-dark dropdown-filter">
                        Filter <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="#000000" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1"
                            x="0px" y="0px" viewBox="0 0 512 640" enable-background="new 0 0 512 512" xml: space="preserve"><polygon points="22.309,0.009 215.049,315.748 215.049,430.088 296.936,511.99 296.936,315.748 489.691,0.009 " /></svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="">Price - ASC</Dropdown.Item>
                        <Dropdown.Item href="">Price - DES</Dropdown.Item>
                        <Dropdown.Item href="">Date - ASC</Dropdown.Item>
                        <Dropdown.Item href="">Date - DES</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <form action="/catalog" method="get" className="ms-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><img className="icon" src="./src/assets/location.png" alt="@" /></span>
                        <input name='location' type="text" className="form-control" placeholder="Location" aria-label="Location" />
                        <button type="submit" className="btn btn-dark">Search</button>
                    </div>
                </form>
            </div>
            <Row>
                <Col>
                    <HouseCard mainImage="./src/assets/Carousel1.webp" address="House address 1" price={1000000} description="Lorem iosun" id={10} />
                </Col>
                <Col>
                    <HouseCard mainImage="./src/assets/Carousel2.webp" address="House address 2" price={128750.55} description="Lorem iosun" id={10} />
                </Col>
                <Col>
                    <HouseCard mainImage="./src/assets/Carousel3.webp" address="House address 3" price={1000034} description="Lorem iosun" id={10} />
                </Col>
                <Col>
                    <HouseCard isRent={true} mainImage="./src/assets/Carousel1.webp" address="House address 4" price={1200} description="Lorem iosun" id={10} />
                </Col>
            </Row>
        </Container>
    )
}

export default CatalogPage;