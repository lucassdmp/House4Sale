import { useState } from "react";
import HouseCardProps from "../interfaces/HouseCardProps";
import "../styles/EditHouseForm.css";
import axios from "axios";

interface editHouseprops{
    props: HouseCardProps;
    onHide: any;
    setHasEdited: any;
}

function EditHouseForm(propsEdit: editHouseprops) {
    const props = propsEdit.props;
    const [housebanner, setHousebanner] = useState(props.housebanner);
    const [address, setAddress] = useState(props.address);
    const [price, setPrice] = useState(props.price);
    const [description, setDescription] = useState(props.description);
    const [msg, setMsg] = useState('');

    const axiosUpdateHouse = () => {
        const houseData = {
            houseid: props.id,
            housebanner: housebanner,
            houseaddress: address,
            houseprice: price,
            housedesc: description,
        };
        axios.post('http://localhost:3000/api/v1/edit/house/', houseData).then((response) => {
            setMsg(response.data.msg);
            propsEdit.onHide(false);
            propsEdit.setHasEdited(true);
            
        }
        );
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            axiosUpdateHouse();
        }} className="EditHouseFormWrapper" action="" method="post">
            <div className="housebannerEdit">
                <div>
                    <label htmlFor="housebanner">House Banner</label><br />
                    <input
                        onChange={(e) => {
                            setHousebanner(e.target.value);
                        }}
                        type="url"
                        name="housebanner"
                        value={housebanner}
                    />
                </div>
                <img src={housebanner} alt="" className="housebannerImage" />
            </div>
            <div className="housedescEdit">
                <div className="houseinfoEdit">
                    <label htmlFor="houseaddress">Address</label><br />
                    <input
                        type="text"
                        name="houseaddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    /><br />
                    <label htmlFor="houseprice">Price</label><br />
                    <input
                        type="text"
                        name="houseprice"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>
                <div className="housedescriptionEdit">
                    <label htmlFor="housedesc">Description</label><br />
                    <textarea
                        name="housedesc"
                        id=""
                        cols={45}
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
            <h2 className="text-dark text-center">{msg}</h2>
            <input className="houseEditButton" type="submit" value="Confirm Edit" />
        </form>
    );
}

export default EditHouseForm;
