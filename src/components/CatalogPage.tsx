import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import '../styles/CatalogPage.css';
import HouseCard from './HouseCard';
import "../styles/Cardlist.css"
import HouseProps from '../interfaces/HouseProps';


function CatalogPage() {
    const items = ['Price - ASC', 'Price - DESC', 'Date - ASC', 'Date - DESC'];
    const [filter, setFilter] = useState('Price - DESC');
    const [location, setLocation] = useState('');
    const [offset, setOffset] = useState(0);

    const [cardList, setCardList] = useState<HouseProps[]>([]);
    const [cardAmount, setCardAmount] = useState(0);

    const [url, setUrl] = useState('http://localhost:3000/api/v1/houses');

   
    useEffect(() => {
        setUrl(`http://localhost:3000/api/v1/houses?location=${location}&filter=${filter}`);
    }, [location, filter]);


    useEffect(() => {
        if (url) {
            axios
                .get(url)
                .then((res) => {
                    setCardList(res.data);
                    setCardAmount(res.data.length);
                })
                .catch((error) => {
                    console.error('Error fetching house data:', error);
                });
        }
    }, [url]);

    const handleInputChange = (e : Event) => {
        const newValue = e.target.value;
        setLocation(newValue);
    }

    return (
        <Container className="text-center mt-5 mb-5">
            <h1 className="text-dark font-weight-normal mb-5">Our House Marketplace</h1>
            <div className="text-end d-flex justfy-content-sb">
                <Dropdown className="" onSelect={(e) => (e == null ? setFilter('Price - DESC') : setFilter(e))}>
                    <Dropdown.Toggle id="dropdown-filter" className="text-dark dropdown-filter">
                        {filter} <svg width="15" fill="#000000" x="0px" y="0px" viewBox="0 0 512 640"><polygon points="22.309,0.009 215.049,315.748 215.049,430.088 296.936,511.99 296.936,315.748 489.691,0.009 " /></svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {items.map((item, index) => {
                            return <Dropdown.Item key={index} eventKey={item}>{item}</Dropdown.Item>;
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <form method="get" className="ms-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><img className="icon" src="./src/assets/location.png" alt="@" /></span>
                        <input onChange={handleInputChange} name='location' type="text" className="form-control" placeholder="Location" aria-label="Location" />
                        <button type="submit" disabled className="btn btn-dark">Search</button>
                    </div>
                </form>
            </div>
            <Container className='card-list'>
                <div className='row'>
                    {cardList
                        .slice(offset, offset + 6)
                        .map((house: HouseProps) => (
                            <div className='col-md-4' key={house.houseid}>
                                <HouseCard
                                    housebanner={house.housebanner}
                                    address={house.houseaddress}
                                    price={house.houseprice}
                                    description={house.housedesc}
                                    id={house.houseid}
                                    isRent={house.isrent}
                                />
                            </div>
                        ))}
                </div>
            </Container>
            <Row className="mt-5">
                <Col className="text-center">
                    {offset === 0 ? <Button className="passbtn btn btn-dark" disabled>Previous</Button> : <Button className="passbtn btn btn-dark" onClick={() => setOffset(offset - 6)}>Previous</Button>}
                    {offset + 6 >= cardAmount ? <Button className="passbtn btn btn-dark" disabled>Next</Button> : <Button className="passbtn btn btn-dark" onClick={() => setOffset(offset + 6)}>Next</Button>}
                </Col>
            </Row>
        </Container>
    );
}
export default CatalogPage;