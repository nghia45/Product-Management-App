import React from "react"
import ReactDOM from "react-dom"
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex.js";
import "./Login.scss"

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginButton = styled(Button)(
    {
        WebkitAppearance: "none",
        width: "auto",
        borderRadius: "24px",
        textAlign: "center",
        padding: "15px 40px",
        marginTop: "5px",
        marginBottom: "10px",
        backgroundColor: "#666bd6",
        color: "#fff",
        fontSize: "14px",
        marginLeft: "auto",
        fontWeight: 500,
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,.13)",
        border: "none",
        transition: "all .3s ease",
        outline: "0",
        "&:hover": {
            color: "#666bd6",
            transform: "translateY(-3px)",
            boxShadow: "0 2px 6px -1px rgba($primary, .65)",
            "&:active": { transform: "scale(.99)" }
        }
    }
);

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    
      const { loading, error, dispatch } = useContext(AuthContext);
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/bigcorp")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
    
    return (
        <div className="login-container">
            <div class="session">
                <div className="left">
                </div>
                <form class="log-in">
                    <h4>Ch??ng t??i l?? <span>Big Corp</span></h4>
                    <p>Ch??o m???ng ???? tr??? l???i ! H??y nh???p th??ng tin t??i kho???n ????? ????ng nh???p ngay nh?? </p>
                    <div class="floating-label">
                        <input placeholder="T??n ????ng nh???p" type="text" name="username" id="username" autocomplete="off" onChange={handleChange} />
                        <label for="username">T??n ????ng nh???p:</label>
                    </div>
                    <div class="floating-label">
                        <input placeholder="M???t kh???u" type="password" name="password" id="password" autocomplete="off" onChange={handleChange} />
                        <label for="password">M???t kh???u:</label>
                    </div>
                    {error && <span className="undefined-message">{error.message}</span>}
                    <LoginButton disabled={loading} onClick={handleClick}>????ng nh???p</LoginButton>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Ghi nh??? ????ng nh???p" />
                    </FormGroup>
                </form>
            </div>
        </div>
    )
}

export default Login