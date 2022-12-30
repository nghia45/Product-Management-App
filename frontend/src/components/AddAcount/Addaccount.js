import "./Addaccount.scss";
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
  const [res,setRes] = useState();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleChange1 = (e) => {
    switch (e.target.value) {
      case "BQL":
        setInfo((prev) => ({
          ...prev,
          isAdmin: true,
          isFactory: false,
          isService: false,
          isStore: false,
        }));
        break;
      case "CSSS":
        setInfo((prev) => ({
          ...prev,
          isAdmin: false,
          isFactory: true,
          isService: false,
          isStore: false,
        }));
        break;
      case "TTBH":
        setInfo((prev) => ({
          ...prev,
          isAdmin: false,
          isFactory: false,
          isService: true,
          isStore: false,
        }));
        break;
      case "DLPP":
        setInfo((prev) => ({
          ...prev,
          isAdmin: false,
          isFactory: false,
          isService: false,
          isStore: true,
        }));
        break;
      default:
        setInfo((prev) => ({
          ...prev,
          isAdmin: false,
          isFactory: false,
          isService: false,
          isStore: false,
        }));
    }
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

      console.log(info);
      const newUser = {
        ...info,
        img: url,
      };

      const resp = await axios.post("/auth/register", newUser);
      setRes(resp);
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
            <img
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
                <label>Loại tài khoản</label>
                <select id="type" onChange={handleChange1}>
                  <option defaultValue={"null"}></option>
                  <option value={"BQL"}>BQL</option>
                  <option value={"CSSS"}>Cơ sở sản suất</option>
                  <option value={"TTBH"}>Trung tâm bảo hành</option>
                  <option value={"DLPP"}>Đại Lý phân phối</option>
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
