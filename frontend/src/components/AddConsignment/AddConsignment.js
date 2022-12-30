import "./AddConsignment.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContex";
import useFetch from "../../hooks/useFetch";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
  const [idPro, setIdPro] = useState();
  const [idSto, setIdSto] = useState();
  const [info, setInfo] = useState({});
  const [res, setRes] = useState();
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`/factory/factoryproducts/${user._id}`);
  const datasto = useFetch("/store/allStores").data;
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleChange1 = (e) => {
    setIdPro(e.target.value);
  };

  const handleChange2 = (e) => {
    setIdSto(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newReq = {
        ...info,
      };

      const resp = await axios.post(`/factory/exportToStore/${user._id}/${idSto}/${idPro}`, newReq);
      setRes(resp);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info, idSto, idPro);
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
                                           <option key={product.productId._id} value={product.productId._id}>
                                           {product.productId.productname}
                                           </option>
                                           ))}
                             </select>
            </div>
            <div className="formInput">
              <label>Số lượng</label>
              <input type="text" id="quantity" onChange={handleChange}/>
            </div>
            <div className="formInput">
              <label>Đại lý phân phối</label>
                            <select id="store" onChange={handleChange2}>
                            <option defaultValue={"null"}></option>
                                {loading
                                    ? "loading"
                                        : datasto &&
                                           datasto.map((sto) => (
                                           <option key={sto._id} value={sto._id}>
                                           {sto.username}
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
