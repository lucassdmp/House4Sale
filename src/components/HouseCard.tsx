import { Button, Card, CardImg, Container } from 'react-bootstrap';

interface HouseCardProps {
    mainImage: string;
    address: string;
    price: number;
    description: string;
    id: number;
    isRent: boolean;
}

function HouseCard({mainImage, address, price, description, id, isRent = false}: HouseCardProps){
    const mainImageCard = mainImage;
    const addressCard = address;
    const priceCard = price;
    const descCard = description;
    const idCard = id;
    const button1 = <Button className='btn btn-success'>Buy Now</Button>;
    const button2 = <Button className='btn btn-success'>Rent Now</Button>;
    const buttonCard = isRent ? button2 : button1;

    return (
        <Container className="text-center">
            <Card className="text-center">
                <CardImg variant="top" src={mainImageCard} />
                <Card.Body>
                    <Card.Title>{addressCard}</Card.Title>
                    <Card.Text className='text-muted'>
                        {descCard}<br/>
                        <a href='/' className='text-dark'>See more</a>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-light bg-dark mb-0 mt-0">$ {priceCard}
                <hr className='hr'/>
                {buttonCard}
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default HouseCard;