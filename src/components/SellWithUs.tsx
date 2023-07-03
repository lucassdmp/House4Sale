import { Form, Button, Container } from "react-bootstrap";
import '../styles/SellWithUs.css'

// get current url
const url = window.location.href;
// get the redirect url
const redirect = 'http://localhost:3000/api/v1/post/swu?redirect=' + url;

function SellWithUs() {
    return (
        <Container className="mt-2">
            <div className="divsellwithus d-flex flex-wrap">
                <div className="text-center">
                    <h1 className="pt-5">Sell With Us</h1>
                    <p className="text-muted">We are one of the best real estate marketplaces in the world</p>
                </div>
                <div>
                    <form method="post" action={redirect} className="formcontact p-4">
                        <h1 className="text-center pt-5">Send us your Curriculum</h1>
                        <p className="text-center">Fill out the form below with your information and send your curriculum vitae. We will contact you shortly.</p>
                        <div className="mb-3">
                            <label className="required-field">Type your name</label>
                            <input name="fullname" type="text" className="form-control" placeholder="Enter your full name" />
                            <small className="text-muted">We'll never share your full name with anyone else.</small>
                        </div>
                        <div className="mb-3">
                            <label className="required-field">Type your email</label>
                            <input name="email" type="email" className="form-control" placeholder="Enter email" />
                            <small className="text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="mb-3">
                            <label className="required-field">Type your phone number</label>
                            <input name="phone" type="text" className="form-control" placeholder="Enter phone number" />
                            <small className="text-muted">We'll never share your phone number with anyone else.</small>
                        </div>
                        <div className="mb-3">
                            <label className="required-field">Input your curriculum vitae</label><br/>
                            <input name="curriculum" type="file" className="form-control-file" />
                        </div>
                        <button className="btn btn-info w-100" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default SellWithUs;