import "./ReturnProduct.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { useState,useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContex";
import useFetch from "../../hooks/useFetch";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
    const [idGua, setIdGua] = useState();
    const [info, setInfo] = useState("");
    const [idord, setIdord] = useState();
    const [res, setRes] = useState();
    const { user } = useContext(AuthContext);
    
    const { data, loading, error } = useFetch(`/service/guaranteesinservice/${user._id}`);

  const handleChange = (e) => {
    setInfo(e.target.value);
  };

  const handleChange1 = (e) => {
    setIdGua(e.target.value);
    data.forEach((currentElement) => { if(currentElement._id == e.target.value) setIdord(currentElement.orderId); })
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if(info == "CSSS") {
        await axios.patch(`/service/returntofactory/${idGua}`);
      } else {
        await axios.patch(`/service/returntostore/${idGua}/${idord}`)
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info, idGua, idord);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="consignment-top">
          <h1>{title}</h1>
          <form className="return-product-form">
            <div className="formInput-return">
              <label>Mã đơn bảo hành</label>
              <select id="order" onChange={handleChange1}>
              <option defaultValue={"null"}></option>
                                {loading
                                    ? "loading"
                                        : data &&
                                           data.map((ord) => (
                                           <option key={ord._id} value={ord._id}>
                                           {'Mã đơn: ' +ord._id}
                                           </option>
                                           ))}
                             </select>
            </div>
            <div className="formInput-return">
              <label>Nơi hoàn trả</label>
              <select id="type" onChange={handleChange}>
                <option defaultValue={"null"}></option>
                <option value={"CSSS"}>Cơ sở sản xuất</option>
                <option value={"DLPP"}>Đại lý phân phôi</option>
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