import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/AxiosWIthAuth"

const Listings = props => {
    const [listings, setListings] = useState([]);

    const UseRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.round(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listings`)
            .then(res => {
                console.log(res);
                setListings(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="listings">
            <h2>Available Houses</h2>
            {
                listings.map(list => {
                    return (
                        <div className="cards">
                            <div className="left">
                                <img src="https://freedesignfile.com/upload/2012/09/Houses-3-.jpg" alt="" />
                            </div>
                            <div className="info">
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/2942/2942933.svg" alt="" />
                                    {list.streetaddress}</h3>
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/888/888026.svg" alt="" />
                                    {list.city}
                                </h3>
                                <h3>
                                    <img src="https://www.flaticon.com/premium-icon/icons/svg/3183/3183157.svg" alt="" />
                                    {list.roomtype}</h3>
                                <h3>
                                    <img src="https://www.flaticon.com/premium-icon/icons/svg/3119/3119410.svg" alt="" />
                                    {list.reviewscorerating ? list.reviewscorerating : 4}</h3>
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/2857/2857279.svg" alt="" />
                                    {list.bathrooms}
                                </h3>
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/3030/3030336.svg" alt="" />
                                    {list.beds}
                                </h3>
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/562/562384.svg" alt="" />
                                    {list.tv === 1 ? "Yes" : "No"}
                                </h3>
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/554/554724.svg" alt="" />
                                    {list.accomodates}
                                </h3>
                                <h3>
                                    <img src="https://image.flaticon.com/icons/svg/631/631180.svg" alt="" />
                                    {list.price == "click for price" ? `${UseRandom(50, 100)}.00` : list.price}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Listings;