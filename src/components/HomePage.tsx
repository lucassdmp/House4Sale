import { Container, Carousel, Image, Form} from "react-bootstrap";
import '../styles/HomePage.css'

function HomePage() {
    return (
        <>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Image className="carousel-img img-fluid" src="./src/assets/Carousel2.webp"></Image>
                        <Carousel.Caption className="custom-caption">
                            <h1>The Best Prices in the Market</h1>
                            <p>We will help you find your dream home.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="bg-image">
                        <Image className="carousel-img img-fluid" src="./src/assets/Carousel3.webp"></Image>
                        <Carousel.Caption className="custom-caption">
                            <h1>We sell house around the world!</h1>
                            <p>Look our Catalog</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="find-house text-center mt-5 mb-5 pb-5 pt-5">
                <h1 className="text-center text-dark">Find a House at House4Sale</h1>
                <p className="text-center text-dark">We are a company that offers the best real estate services in the market. We have a wide variety of properties for sale and rent, both residential and commercial. We have a team of highly trained professionals to advise you in the best way.</p>
                <Form action="/catalog" method="get">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><img className="icon" src="./src/assets/location.png" alt="@" /></span>
                        <input name='location' type="text" className="form-control" placeholder="Location" aria-label="Location" />
                        <button type="submit" className="btn bg-dark btn-outline-light">Search</button>
                    </div>
                </Form>
            </Container>
        </>
    );
}

export default HomePage;