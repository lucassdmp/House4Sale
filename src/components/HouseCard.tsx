import React, { useState } from 'react';
import { Button, Card, CardImg, Container } from 'react-bootstrap';
import HouseModal from './HouseModal';
import HouseCardProps from '../interfaces/HouseCardProps';
import '../styles/HouseCard.css';

function formatPrice(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function HouseCard(houseAtt: HouseCardProps) {
    const buttonCard = (
        <Button className='btn btn-success'>
            {houseAtt.isRent ? 'Rent Now' : 'Buy Now'}
        </Button>
    );

    const [showModal, setShowModal] = useState(false);

    function shortenDesc(desc: string) {
        if (desc.length > 50) {
            return desc.substring(0, 50) + '...';
        }
        return desc;
    }

    return (
        <Container className='text-center house-card' id={houseAtt.id.toString()}>
            <Card className='text-center'>
                <CardImg className='card-image' variant='top' src={houseAtt.housebanner} />
                <Card.Body className='card-body d-flex flex-column'>
                    <Card.Title className='mb-3 mt-3'>{houseAtt.address}</Card.Title>
                    <Card.Text className='text-muted'>
                        {shortenDesc(houseAtt.description)}<br />
                        <p onClick={() => setShowModal(true)} className='see-more'>
                            See more
                        </p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-light bg-dark mb-0 mt-0'>
                    <p className='price-card'>
                        ${formatPrice(houseAtt.price)}{' '}
                        {houseAtt.isRent ? '/ Monthly Payment' : '/ One-time Payment'}
                    </p>
                    <hr className='hr' />
                    {buttonCard}
                </Card.Footer>
            </Card>
            <HouseModal
                show={showModal}
                houseAtt={houseAtt}
                onHide={() => setShowModal(false)}
            />
        </Container>
    );
}

export default HouseCard;
