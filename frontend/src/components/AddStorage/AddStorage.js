import "./AddStorage.scss"

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContex";
import useFetch from "../../hooks/useFetch";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

const New = ({ inputs, title }) => {
    const [idPro, setIdPro] = useState();
    const [info, setInfo] = useState({});
    const [res, setRes] = useState();
    const { data, loading, error } = useFetch("/admin/products");
    const { user } = useContext(AuthContext);
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

            const resp = await axios.post(`/factory/addtostorage/${user._id}/${idPro}`, newReq);
            setRes(resp);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(info, user._id, idPro);
    const renderMessage = () => {
        if (res.status == 200) {
            return <div className="success-message">
                <CheckCircleOutlineIcon className="success-icon" />
                <span className="message">{res.data}</span>
            </div>
        }
        if (res.status == 500) {
            return <div className="error-message">
                <ClearIcon className="error-icon" />
                <span className="message">{res.data}</span>
            </div>
        }
    }
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="consignment-top">
                    <h1>{title}</h1>
                    <form className="add-consignment-form">
                        <div className="formInput">
                            <label>Dòng sản phẩm</label>
                            <select id="product" onChange={handleChange1}>
                                <option defaultValue={"null"}></option>
                                {loading
                                    ? "loading"
                                    : data &&
                                    data.map((product) => (
                                        <option key={product._id} value={product._id}>
                                            {product.productname}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="formInput">
                            <label>Số lượng</label>
                            <input type="text" id="quantity" onChange={handleChange} />
                        </div>
                        <button className="export-button" onClick={handleClick}>Thêm</button>
                    </form>
                </div>
            </div>
            {res &&
                <div>
                    {renderMessage()}
                </div>
            }
        </div>
    );
};

export default New;
