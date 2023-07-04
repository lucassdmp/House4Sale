import axios from "axios";
import { useEffect, useState } from "react";
import HouseEditListElement from "./HouseEditListElement";
import HouseCardProps from "../interfaces/HouseCardProps";
import '../styles/HouseEditList.css';
import EditHouseForm from "./EditHouseForm";

function HouseEditList() {
    const [houses, setHouses] = useState([])
    const [hasQueried, setHasQueried] = useState(false)
    const [hasDeleted, setHasDeleted] = useState(false)
    const [houseClass, setHouseClass] = useState('');
    const [hasEdited, setHasEdited] = useState(false);

    useEffect(() => {
        console.log(hasDeleted, hasQueried, hasEdited);
        axios.get('http://localhost:3000/api/v1/houses').then((response) => {
            setHouses(response.data);
            setHasQueried(true);
            setHasDeleted(false);
            (houses.length < 3) ? setHouseClass("houseListElementEmpty") : setHouseClass("");
        });
    }, [hasQueried, hasDeleted, hasEdited]);


    return (
        <div className={houseClass}>
            {houses.map((house: any) => {
                const houseProps: HouseCardProps = {
                    description: house.housedesc,
                    isRent: house.isRent,
                    housebanner: house.housebanner,
                    address: house.houseaddress,
                    price: house.houseprice,
                    id: house.houseid,
                };
                return (<HouseEditListElement key={house.houseid} setHasDeleted={setHasDeleted} props={houseProps} setHasEdited={setHasEdited} />)
            })}
            <br/>
        </div>
    );
}

export default HouseEditList;