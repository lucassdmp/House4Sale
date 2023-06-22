import { Container, Carousel, Image} from "react-bootstrap";
import '../styles/HomePage.css'

function HomePage() {
    return (
        <>
            <Container>
                <Carousel>
                    <Carousel.Item >
                        <Image className="carousel-img img-fluid" src="./src/assets/Carousel2.webp"></Image>
                        <Carousel.Caption className="custom-caption">
                            <h1>The Best Prices in the Market</h1>
                            <p>We will help you find your dream home.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-img img-fluid" src="./src/assets/Carousel3.webp"></Image>
                        <Carousel.Caption className="custom-caption">
                            <h1>We sell house around the world!</h1>
                            <p>Look our Catalog</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}

export default HomePage;