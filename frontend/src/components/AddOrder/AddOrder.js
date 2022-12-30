import "./AddOrder.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState,useContext } from "react";
import axios from "axios";

import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AuthContext } from "../../context/AuthContex";
import useFetch from "../../hooks/useFetch";

const New = ({ inputs, title }) => {
    const [idPro, setIdPro] = useState();
    const [info, setInfo] = useState({});
    const [res, setRes] = useState();
    
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`/store/storeproducts/${user._id}`);
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleChange1 = (e) => {
        setIdPro(e.target.value);
    };
    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            const newReq = {
                ...info,
            };

            const resp = await axios.post(`/store/sellProduct/${user._id}/${idPro}`, newReq);
            setRes(resp)
        } catch (err) {
            console.log(err);
        }
    };

    console.log(info, idPro);
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
                        {inputs.map((input) => (
                          <div className="formInput" key={input.id}>
                         <label>{input.label}</label>
                           <input
                             onChange={handleChange}
                             type={input.type}
                             placeholder={input.placeholder}
                             id={input.id}
                               />
                             </div>
                            ))}
                            <div className="formInput">
                                <label>Loại sản phẩm</label>
                                <select id="product" onChange={handleChange1}>
                                <option defaultValue={"null"}></option>
                                {loading
                                    ? "loading"
                                        : data &&
                                           data.map((product) => (
                                           <option key={product.productId._id} value={product.productId._id}>
                                           {product.productId.productname}
                                           </option>
                                           ))}
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