import React from "react"
import ReactDOM from "react-dom"

import Button from '@mui/material/Button';

import Sidebar from "../Sidebar/Sidebar";

import "./Bigcorp.scss"
import Navbar from "../Navbar/Navbar";
import Widget from "../Widget/Widget";
import Addaccount from "../AddAcount/Addaccount";
import ProductLine from "../ProductLine/Productline";

const Bigcorp = () => {
    return (
        <div className="bigcorp">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default Bigcorp;