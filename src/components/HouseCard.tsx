import { Button, Card, CardImg, Container } from 'react-bootstrap';

function HouseCard(){
    return (
        <Container className="text-center w-25">
            <Card className="text-center">
                <CardImg variant="top" src="https://picsum.photos/100/75" />
                <Card.Body>
                    <Card.Title>Address</Card.Title>
                    <Card.Text className='text-dark'>
                        3 Bed rooms, 2 bathrooms, 1 kitchen, 50m² backyard...<br/>
                        <a href='/' className='text-dark'>See more</a>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-light bg-dark mb-0 mt-0">Price
                <hr className='hr'/>
                <Button>Buy Now</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default HouseCard;