import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import axios from "axios";
import DashNav from "./dashNav";
import Listings from "./Listings";
import { AppContext } from "../context/AppContext";
import { axiosWithAuth } from "../utils/AxiosWIthAuth";


const Dashboard = props => {
    // const [userDetails, setUserDetails] = useContext(AppContext);
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        axiosWithAuth()
            .get(`https://kmcgeeka-airbnboptimal.herokuapp.com/users/myinfo`)
            .then(res => {
                console.log(res);
                setUserDetails(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="dashboard">
            <DashNav />
            <Listings />
            <Router>
                 
            </Router>
        </div>
    )
}

export default Dashboard;