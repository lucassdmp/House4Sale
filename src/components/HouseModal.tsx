import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import HouseCardProps from "../interfaces/HouseCardProps";

interface HouseModalProps {
    show: boolean;
    onHide: any;
    houseAtt: HouseCardProps;
}

function HouseModal({ show, onHide, houseAtt }: HouseModalProps) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title className="">
                    {houseAtt.address} - Info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <p className="text-muted">{houseAtt.description}</p>
                            <hr className="text-dark" />
                            <h3 className="text-dark">Price: $ {houseAtt.price}</h3>
                        </Col>
                        <Col>
                            <img className="img-fluid" src={houseAtt.housebanner} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-success" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default HouseModal;