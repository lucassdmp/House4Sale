import { Form, Button, Container } from "react-bootstrap";
import '../styles/Contact.css'

function Contact(){
    return (
        <>
            <Container className="containercontact mb-3 mt-4">
                <Form className="formcontact p-5" >
                    <h1 className="text-center pt-5">Contact Us</h1>
                    <p className="text-center">Fill out the form below with your information and your message. We will contact you shortly.</p>
                    <Form.Group className="mb-3 " controlId="Forms">
                        <Form.Label className="required-field">Type you email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Forms">
                        <Form.Label className="required-field">Type you phone number</Form.Label>
                        <Form.Control type="Phone" placeholder="Enter phone number" />
                        <Form.Text className="text-muted">
                        We'll never share your phone number with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Message">
                        <Form.Label className="required-field">Type your message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Contact;