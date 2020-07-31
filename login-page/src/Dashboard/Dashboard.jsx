import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import axios from "axios";
import DashNav from "./dashNav";
import Listings from "./Listings";
import { AppContext } from "../context/AppContext";
import { axiosWithAuth } from "../utils/AxiosWIthAuth";
import AddListing from "./AddListing";
import Profile from "./Profile";


const Dashboard = props => {
    const [userDetails, setUserDetails] = useState({list: []})
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axiosWithAuth()
            .get(`https://kmcgeeka-airbnboptimal.herokuapp.com/users/myinfo`)
            .then(res => {
                console.log(res);
                setUserDetails(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="dashboard">
            <DashNav userDetails={userDetails} />
            <Router>
                <PrivateRoute path="/dashboard" exact>
                    <Listings />
                </PrivateRoute>
                <PrivateRoute path="/dashboard/addlisting">
                    <AddListing userDetails={userDetails} isEditing={isEditing} setIsEditing={setIsEditing}/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/profile">
                    <Profile userDetails={userDetails} setUserDetails={setUserDetails} isEditing={isEditing} setIsEditing={setIsEditing} />
                </PrivateRoute>
            </Router>
        </div>
    )
}

export default Dashboard;