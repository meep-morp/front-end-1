import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/AxiosWIthAuth"

const Listings = props => {
const [listings, setListings] = useState([]);

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
                            <img src="https://freedesignfile.com/upload/2012/09/Houses-3-.jpg" alt=""/>
                            <h3>{list.streetaddress}</h3>
                            <h3>{list.roomtype}</h3>
                            <h3>{list.reviewscorerating}</h3>
                            <h3>{list.bathrooms}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Listings;