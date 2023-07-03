import { Button, Modal } from "react-bootstrap";
import HouseCardProps from "../interfaces/HouseCardProps";
import EditHouseForm from "./EditHouseForm";

interface EditModalProps{
    showModal: boolean;
    onHide: any;
    houseProps: HouseCardProps;
    setHasEdited: any;
}

function EditModal(props: EditModalProps){
    return(
        <Modal
            show={props.showModal}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title className="">
                    {props.houseProps.address} - Info - {props.houseProps.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditHouseForm setHasEdited={props.setHasEdited} onHide={props.onHide} props={props.houseProps}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-success" onClick={() => props.onHide(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal;