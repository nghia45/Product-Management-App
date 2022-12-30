import "./Addproduct.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

      const newProd = {
        ...info,
        image: url,
      };

      await axios.post("/admin/createProduct", newProd);
    } catch (err) {
      console.log(err);
    }
  };

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
            <img
              className="img-product"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form className="add-account-form">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

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
                <select id="type" onChange={handleChange}>
                  <option defaultValue={"null"}></option>
                  <option value={"Xe 3 bánh"}>Xe 3 bánh</option>
                  <option value={"Xe 4 bánh"}>Xe 4 bánh</option>
                  <option value={"Xe 4 chỗ"}>Xe 4 chỗ</option>
                  <option value={"Xe 7 chỗ"}>Xe 7 chỗ</option>
                  <option value={"Xe mui trần"}>Xe mui trần</option>
                </select>
              </div>
            </form>
            <button className="send-button" onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
