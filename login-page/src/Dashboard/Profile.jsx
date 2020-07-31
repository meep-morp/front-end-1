import React from "react";
import { axiosWithAuth } from "../utils/AxiosWIthAuth";

const Profile = ({ userDetails, setUserDetails }) => {

    const onDelete = id => {
        axiosWithAuth()
            .delete(`https://kmcgeeka-airbnboptimal.herokuapp.com/listings/delete/${id}`)
            .then(res => {
                console.log(res);
                setUserDetails({ ...userDetails, list: userDetails.list.filter(list => (list.id !== id)) });
                window.location.assign("/dashboard/profile")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="profile">
            <h2>My Listings</h2>
            {
                userDetails.list.map(list => {
                    return (
                        <div className="cards profileCard">
                            <div className="left">
                                <img src="https://freedesignfile.com/upload/2012/09/Houses-3-.jpg" alt="" />
                                <button onClick={() => onDelete(list.listingid)}>Delete</button>
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
                                    {list.price}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profile;