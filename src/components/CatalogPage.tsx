import { Container, Dropdown, Row, Col } from "react-bootstrap";
import HouseCard from "./HouseCard";
import "../styles/CatalogPage.css"
import { useState } from "react";
import CardList from "./CardList";
import { useSearchParams } from "react-router-dom";


function CatalogPage() {
    const items = ["Price - ASC", "Price - DES", "Date - ASC", "Date - DES"];
    const [filter, setFilter] = useState("Filter");
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("location") || "teste";

    return (
        <Container className="text-center mt-5 mb-5">
            <h1 className="text-dark font-weight-normal mb-5">Our House Marketplace</h1>
            <div className="text-end d-flex justfy-content-sb">
                <Dropdown className="" onSelect={(e) => {e == null ? setFilter("Filter"): setFilter(e) }}>
                    <Dropdown.Toggle id="dropdown-filter" className="text-dark dropdown-filter">
                        {filter} <svg width="15" fill="#000000" x="0px" y="0px" viewBox="0 0 512 640"><polygon points="22.309,0.009 215.049,315.748 215.049,430.088 296.936,511.99 296.936,315.748 489.691,0.009 " /></svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {items.map((item, index) => {
                            return <Dropdown.Item key={index} eventKey={item}>{item}</Dropdown.Item>
                        })}
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
            <CardList cardAmout={9} filter={filter} search={search}/>
            
            {/* <Row>
                <Col>
                    <HouseCard isRent={true} mainImage="./src/assets/Carousel1.webp" address="House address 1" price={1000000} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi qui illo, dolorem dignissimos possimus amet laborum, blanditiis accusamus ducimus corporis expedita consectetur hic exercitationem sunt atque ratione nemo molestias eveniet laudantium praesentium? Delectus velit quia explicabo, nostrum suscipit doloremque placeat consequatur et assumenda ipsa dignissimos animi natus distinctio odit labore." id={10} />
                </Col>
                <Col>
                    <HouseCard isRent={false} mainImage="./src/assets/Carousel2.webp" address="House address 2" price={128750.55} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi qui illo, dolorem dignissimos possimus amet laborum, blanditiis accusamus ducimus corporis expedita consectetur hic exercitationem sunt atque ratione nemo molestias eveniet laudantium praesentium? Delectus velit quia explicabo, nostrum suscipit doloremque placeat consequatur et assumenda ipsa dignissimos animi natus distinctio odit labore." id={10} />
                </Col>
                <Col>
                    <HouseCard isRent={false} mainImage="./src/assets/Carousel3.webp" address="House address 3" price={1000034} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi qui illo, dolorem dignissimos possimus amet laborum, blanditiis accusamus ducimus corporis expedita consectetur hic exercitationem sunt atque ratione nemo molestias eveniet laudantium praesentium? Delectus velit quia explicabo, nostrum suscipit doloremque placeat consequatur et assumenda ipsa dignissimos animi natus distinctio odit labore." id={10} />
                </Col>
                <Col>
                    <HouseCard isRent={true} mainImage="./src/assets/Carousel1.webp" address="House address 4" price={1200} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi qui illo, dolorem dignissimos possimus amet laborum, blanditiis accusamus ducimus corporis expedita consectetur hic exercitationem sunt atque ratione nemo molestias eveniet laudantium praesentium? Delectus velit quia explicabo, nostrum suscipit doloremque placeat consequatur et assumenda ipsa dignissimos animi natus distinctio odit labore." id={10} />
                </Col>
            </Row> */}
        </Container>
    )
}

export default CatalogPage;