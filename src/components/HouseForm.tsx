import axios from 'axios';
import '../styles/HouseForm.css'
import { useState } from 'react';

function HouseForm() {
    const [ResponseMSG, setResponseMSG] = useState('');

    const axiosPost = (housetype: string, housebanner: string, houseaddress: string, houseprice: number, housedesc: string, isrent: boolean) => {
        axios.post('http://localhost:3000/api/v1/post/house', {
            housetype: housetype,
            housebanner: housebanner,
            houseaddress: houseaddress,
            houseprice: houseprice,
            housedesc: housedesc,
            isrent: isrent
        }).then((response) => {
            setResponseMSG(response.data);
        }, (error) => {
            console.log(error);
        });
    };
    
    return (
        <div>
            <form onSubmit={(e) =>{
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const housetype = target.housetype.value;
                const housebanner = target.housebanner.value;
                const houseaddress = target.houseaddress.value;
                // get house price as number
                const houseprice = Number(target.houseprice.value);
                const housedesc = target.housedesc.value;
                const isrent = target.isrent.value == 'true' ? true : false;
                axiosPost(housetype, housebanner, houseaddress, houseprice, housedesc, isrent);
            }} method="post" className="HouseForm">
                <h2>{ResponseMSG}</h2>
                <label htmlFor="housetype">House Type</label>
                <select required name="housetype" id="housetype">
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                </select>

                <label htmlFor="housebanner">House Banner (URL)</label>
                <input placeholder='Insert url to house image' required type="url" name="housebanner" id="housebanner" />

                <label htmlFor="houseaddress">House Address</label>
                <input placeholder='Insert House Address' required type="text" name="houseaddress" id="houseaddress" />

                <label htmlFor="houseprice">House Price</label>
                <input onChange={(e) =>{
                    const target = e.target as HTMLInputElement;
                    const value = target.value;
                    if (isNaN(Number(value))) {
                        target.value = value.slice(0, -1);
                    }
                }} required type="text" name="houseprice" id="houseprice" />

                <label htmlFor="housedesc">House Description</label>
                <input required type="text" name="housedesc" id="housedesc" />

                <label htmlFor="isrent">Is rentable?</label>
                <select required name="isrent" id="isrent">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HouseForm;