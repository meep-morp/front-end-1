import React, { useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWIthAuth";

const AddListing = ({ userDetails, values, type, isEditing, setIsEditing}) => {
    const [newListing, setNewListing] = useState({ ...values, city: "NYC" });
    const [message, setMessage] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();

        const req = {
            reviewscoresrating: 4,
            accomodates: parseInt(newListing.accomodates),
            bathrooms: parseInt(newListing.bathrooms),
            beds: parseInt(newListing.beds),
            bedrooms: parseInt(newListing.bedrooms),
            ...newListing
        }

        console.log(req);

        // PATCH https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/{listingid}
        // POST  https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/create

        if (type === "PATCH") {
            axiosWithAuth()
            .patch(`https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/${values.listingid}`, req)
            .then(res => {
                console.log(res);
                // window.location.assign("/dashboard/profile")
                setNewListing({})
                setMessage("✅ Listing Updated")
                setTimeout(() => {
                    setIsEditing(false);
                }, 1000);
            })
            .catch(err => {
                console.log(err);
                setMessage("❌ An error has occured")
            })
        } else {
            axiosWithAuth()
            .post(`https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/create`, req)
            .then(res => {
                console.log(res);
                // window.location.assign("/dashboard/profile")
                setNewListing({})
                setMessage("✅ Listing Added")
            })
            .catch(err => {
                console.log(err);
                setMessage("❌ An error has occured")
            })
        }
    }

    const onChangeHandler = e => {
        setNewListing({
            ...newListing,
            [e.target.name]: e.target.value
        })
    }

    const onCheckChangeHandler = e => {
        setNewListing({
            ...newListing,
            [e.target.name]: e.target.checked ? 1 : 0
        })
    }

    // https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/create

    /*  
  "roomtype": "string",
  "accomodates": 0,
  "bathrooms": 0,
  "city": "string",
  "latitude": 0,
  "longitude": 0,
  "reviewscoresrating": 0,
  "bedrooms": 0,
  "beds": "string",
  "tv": 0,
  "streetaddress": "string",
  "zipcode": 0
  */

    return (
        <form onSubmit={onSubmitHandler} >
            <div>
                <h2>Rent Out Your Room</h2>
                <h4 className="message">{message}</h4>
                <label className="TTS_ONLY" htmlFor="roomtype" />
                <input name="roomtype" type="text" placeholder="Room Type" value={newListing.roomtype} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="bathrooms" />
                <input name="bathrooms" type="number" placeholder="Number of Bathrooms" value={newListing.bathrooms} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="bedrooms" />
                <input name="bedrooms" type="number" placeholder="Number of Bedrooms" value={newListing.bedrooms} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="beds" />
                <input name="beds" type="number" placeholder="Number of Beds" value={newListing.beds} onChange={onChangeHandler} />

                <div className="tv">
                    <label htmlFor="tv">TV:</label>
                   Yes <input name="tv" type="radio" onChange={onCheckChangeHandler} />
                   No <input name="tv" type="radio" onChange={onCheckChangeHandler} />
                </div>

                <label className="TTS_ONLY" htmlFor="address" />
                <input name="streetaddress" type="text" placeholder="Addresss" value={newListing.streetaddress} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="accomodates" />
                <input name="accomodates" type="number" placeholder="Accomodates" value={newListing.accomodates} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="zipcode" />
                <input name="zipcode" type="number" placeholder="Zipcode" value={newListing.zipcode} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="city" />
                <select>
                    <option value="nyc">New York City</option>
                    <option value="la">Los Angeles</option>
                    <option value="dc">Washington DC</option>
                    <option value="chicago">Chicago</option>
                    <option value="boston">Boston</option>
                    <option value="sf">San Franscisco</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddListing;