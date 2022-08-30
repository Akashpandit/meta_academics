import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/Index.js';
import { Box, Typography, Button, TextField } from '@mui/material';

const AuthLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });



    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async (type = "login") => {
        const res = await axios
            .post(`${process.env.REACT_APP_BASEURL}/api/user/login`, {
                email: inputs.email,
                password: inputs.password
            })
            .catch((err) => {
                console.log(err)
            });
        const data = await res.data;
        console.log(data);
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
            .then((data) => {
                localStorage.setItem("userId", data.user._id)
            })
            .then(() => dispatch(authActions.login()))
            .then(() => navigate("/admin/home"));
    }

    return (
        <div className='login_container'>
            <form onSubmit={handleSubmit}>
                <Box>
                    <Typography>Login</Typography>
                    <TextField
                        type={"text"}
                        name="email"
                        placeholder='Email'
                        value={inputs.email}
                        onChange={handleChange}

                    />
                    <TextField
                        type={"password"}
                        name="password"
                        placeholder='Enter Password'
                        value={inputs.password}
                        onChange={handleChange}

                    />
                    <Button type="submit" variant='contained' sx={{ borderRadius: 2, marginTop: 3, backgroundColor: "#0000ff" }}>Login</Button>

                </Box>
            </form>

        </div>
    )
}

export default AuthLogin