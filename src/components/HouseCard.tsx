import { Button, Card, CardImg, Container, Modal } from 'react-bootstrap';
import HouseModal from './HouseModal';
import { useState } from 'react';
import HouseCardProps from '../interfaces/HouseCardProps';
import '../styles/HouseCard.css';

function formatPrice(price : number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function HouseCard(houseAtt : HouseCardProps) {
    const buttonCard = <Button className='btn btn-success'>{houseAtt.isRent ? "Rent Now" : "Buy Now"}</Button>;

    const [showModal, setShowModal] = useState(false);

    function shortenDesc(desc : string) {
        if (desc.length > 100) {
            return desc.substring(0, 100) + '...';
        }
        return desc;
    }

    return (
        <Container className="text-center">
            <Card className="text-center">
                <CardImg variant="top" src={houseAtt.mainImage} />
                <Card.Body>
                    <Card.Title>{houseAtt.address}</Card.Title>
                    <Card.Text className='text-muted'>
                        {shortenDesc(houseAtt.description)}<br />
                        <p onClick={() =>{setShowModal(true)}} className='see-more'>See more</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-light bg-dark mb-0 mt-0"><p className='price-card'>${houseAtt.price} {houseAtt.isRent  && "/ Monthly Payment"}  {houseAtt.isRent == false && "/ One-time Payment"}</p>
                    <hr className='hr' />
                    {buttonCard}
                </Card.Footer>
            </Card>
            <HouseModal show={showModal} houseAtt={houseAtt} onHide={() => setShowModal(false)}></HouseModal>
        </Container>
    );
}

export default HouseCard;