import React from "react";
import ReactDOM from "react-dom";

import Button from "@mui/material/Button";

import Sidebar from "../Sidebar/Sidebar";

import "./Bigcorp.scss";
import Navbar from "../Navbar/Navbar";
import Widget from "../Widget/Widget";
import Chart from "../Chart/MonthChart";
import Addaccount from "../AddAcount/Addaccount";
import ProductLine from "../ProductLine/Productline";

const Bigcorp = () => {
  return (
    <div className="bigcorp">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Chart title="Thu nhập theo từng tháng" aspect={3 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Bigcorp;
