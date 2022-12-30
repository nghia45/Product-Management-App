import "./AddGuarantee.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { useState,useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContex";
import useFetch from "../../hooks/useFetch";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
  const [idOrd, setIdOrd] = useState();
  const [idSer, setIdSer] = useState();
  const [info, setInfo] = useState({});
  const [res, setRes] = useState();
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`/store/ordersinstore/${user._id}`);
  const dataSer = useFetch("/service/allServices").data;
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleChange1 = (e) => {
    setIdOrd(e.target.value);
  };

  const handleChange2 = (e) => {
    setIdSer(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newReq = {
        ...info,
      };

      const resp = await axios.post(`/store/moveBroProToSer/${idOrd}/${idSer}`, newReq);
      setRes(resp);
    } catch (err) {
      console.log(err);
    }
  };
    console.log(info, idOrd, idSer);
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="consignment-top">
                    <h1>{title}</h1>
                    <form className="add-guarantee-form">
                        <div className="formInput">
                            <label>Nhân viên sửa chữa</label>
                            <input type="text" id="staff" onChange={handleChange}/>
                        </div>
                        <div className="formInput">
                            <label>Mô tả lỗi</label>
                            <input type="text" id="desc" onChange={handleChange}/>
                        </div>
                        <div className="formInput">
                            <label>Mã đơn hàng</label>
                            <select id="order" onChange={handleChange1}>
                            <option defaultValue={"null"}></option>
                                {loading
                                    ? "loading"
                                        : data &&
                                           data.map((ord) => (
                                           <option key={ord._id} value={ord._id}>
                                           {'Mã đơn:' +ord._id+', tên khách:' + ord.customerName }
                                           </option>
                                           ))}
                             </select>
                        </div>
                        <div className="formInput">
                        <label>Trung tâm bảo hành</label>
                        <select id="service" onChange={handleChange2}>
                        <option defaultValue={"null"}></option>
                                {loading
                                    ? "loading"
                                        : dataSer &&
                                           dataSer.map((ser) => (
                                           <option key={ser._id} value={ser._id}>
                                           {ser.username}
                                           </option>
                                           ))}
                             </select>
                        </div>
                    </form>
                </div>
                <button className="export-button" onClick={handleClick}>Xuất</button>
            </div>
        </div>
    );
};

export default New;