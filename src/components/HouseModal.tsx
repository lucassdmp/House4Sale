import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import HouseCardProps from "../interfaces/HouseCardProps"; 

interface HouseModalProps {
    show: boolean;
    onHide: any;
    houseAtt: HouseCardProps;
}

function HouseModal({show, onHide, houseAtt} : HouseModalProps) {
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
                            {/* 3 random images from web*/}
                            <img className="modal_img" src="https://picsum.photos/300/200" alt="random" />
                            <img className="modal_img" src="https://picsum.photos/200/100" alt="random" />
                            <img className="modal_img" src="https://picsum.photos/150/100" alt="random" />
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