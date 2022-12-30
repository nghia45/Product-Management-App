import "./AddOrder.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/drx0qwczc/image/upload",
                data
            );

            const { url } = uploadRes.data;

            const newUser = {
                ...info,
                img: url,
            };

            await axios.post("/auth/register", newUser);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(info);
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left_">
                        <img className="left-image" src={"https://i1-vnexpress.vnecdn.net/2022/09/13/DSC4709JPG-1663045028.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=U99Kx3iP6MBtwNp3j2pScw"} />
                    </div>
                    <div className="right">
                        <form className="add-order-form">
                            <div className="formInput" >
                                <label>Tên khách hàng</label>
                                <input></input>
                            </div>
                            <div className="formInput" >
                                <label>Số điện thoại</label>
                                <input></input>
                            </div>
                            <div className="formInput" >
                                <label>Địa chỉ</label>
                                <input></input>
                            </div>
                            <div className="formInput" >
                                <label>Email</label>
                                <input></input>
                            </div>
                            <div className="formInput">
                                <label>Loại sản phẩm</label>
                                <select>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                        </form>
                        <button className="add-order-button" onClick={handleClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;