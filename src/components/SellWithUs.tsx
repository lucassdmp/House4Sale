import { Form, Button, Container } from "react-bootstrap";
import '../styles/SellWithUs.css'

function SellWithUs() {
    return (

        <Container className="containercontact mb-3 mt-4">
            <Form className="formcontact p-5" >
                <h1 className="text-center pt-5">Sell With Us</h1>
                <p className="text-center">Fill out the form below with your information and send your curriculum vitae. We will contact you shortly.</p>
                <Form.Group className="mb-3" controlId="Forms">
                    <Form.Label className="required-field">Type your name</Form.Label>
                    <Form.Control type="Phone" placeholder="Enter you full name" />
                    <Form.Text className="text-muted">
                        We'll never share your full name with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 " controlId="Forms">
                    <Form.Label className="required-field">Type your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Forms">
                    <Form.Label className="required-field">Type your phone number</Form.Label>
                    <Form.Control type="Phone" placeholder="Enter phone number" />
                    <Form.Text className="text-muted">
                        We'll never share your phone number with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="required-field">Input your curriculum vitae</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default SellWithUs;