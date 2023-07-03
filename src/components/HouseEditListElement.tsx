import axios from "axios";
import HouseCardProps from "../interfaces/HouseCardProps";
import '../styles/HouseEditListElement.css';
import { useState } from "react";
import EditModal from "./EditModal";

function shortenDesc(desc: string) {
    if (desc.length > 50) {
        return desc.substring(0, 50) + '...';
    }
    return desc;
}

interface HouseEditListProps{
    props: HouseCardProps;
    setHasDeleted(hasDeleted: boolean): void;
    setHasEdited(hasEdited: boolean): void;
}

function HouseEditListElement(ListProps: HouseEditListProps) {
    const props = ListProps.props;
    const updateHasDeleted = ListProps.setHasDeleted;

    const axiosDelete = (id: number) => {
        axios.delete('http://localhost:3000/api/v1/delete/house/' + id).then((response) => {
            updateHasDeleted(true);
        });
    };

    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className="houseListElement">
            <div className="houseListElementImg">
                <img src={props.housebanner} alt="houseBanner" />
            </div>
            <div className="houseListElementInfo">
                <h2>{props.address}</h2>
                <h3>{props.price}</h3>
            </div>
            <div className="houseListElementDesc">
                <p>{shortenDesc(props.description)}</p>
            </div>
            <div className="houseListElementButtons">
                <button onClick={() => setShowModal(true)} className="btn btn-primary">Edit</button>
                <button onClick={() => {
                    axiosDelete(props.id);
                }} className="btn btn-danger">Delete</button>
            </div>
            <EditModal setHasEdited={ListProps.setHasEdited} showModal={showModal} onHide={setShowModal} houseProps={props}/>
        </div>
    );
}

export default HouseEditListElement;