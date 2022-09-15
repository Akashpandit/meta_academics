import React, { useState } from 'react'
import { Box, Typography, TextField, InputLabel, Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const AddEvent = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        startDate: "",
        endDate: "",
        time: "",
        description: "",
        poster: "",
        venue: "",
        registrationLink: "",
        meetingLink: ""
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        const res = await axios
            .post(`${process.env.REACT_APP_BASEURL}/api/event/addevent`, {
                name: inputs.name,
                startDate: inputs.startDate,
                endDate: inputs.endDate,
                time: inputs.time,
                description: inputs.description,
                poster: "https://drive.google.com/uc?export=view&id=" + inputs.poster,
                venue: inputs.venue,
                registrationLink: inputs.registrationLink,
                meetingLink: inputs.meetingLink,
                user: localStorage.getItem("userId")
            })
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
            .then(() => {

                navigate("/admin/home")
            })

    }



    return (
        <div >
            <form onSubmit={handleSubmit}>

                <Box
                    borderRadius={2}
                    display="flex"
                    flexDirection={"column"}
                    width="80%"
                    margin={"auto"}
                    marginTop={2}
                    marginBottom={2}
                >
                    <Typography variant='h5'>Add an Event</Typography>
                    <InputLabel marginTop="1rem">Name:</InputLabel>
                    <TextField
                        name="name"
                        variant="outlined"
                        value={inputs.value}
                        onChange={handleChange}
                        required="true"
                    />
                    <div className='date_time_container'
                        style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between" }}
                    >
                        <div >
                            <InputLabel marginTop="1rem">Start Date:</InputLabel>
                            <TextField
                                name="startDate"
                                type="date"
                                variant="outlined"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"
                            />
                        </div>
                        <div>
                            <InputLabel >End Date:</InputLabel>
                            <TextField
                                name="endDate"
                                type="date"
                                variant="outlined"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"
                            />
                        </div>
                        <div>
                            <InputLabel >Time:</InputLabel>
                            <TextField
                                name="time"
                                type="time"
                                variant="outlined"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"
                            />
                        </div>
                        <div >
                            <InputLabel >Poster ID</InputLabel>

                            <TextField
                                name="poster"
                                variant="outlined"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"
                                multiline="true"
                            />
                        </div>
                    </div>
                    <InputLabel >About event:</InputLabel>
                    <TextField
                        name="description"
                        variant="outlined"
                        value={inputs.value}
                        onChange={handleChange}
                        required="true"
                        multiline="true"
                    />

                    <InputLabel >Venue</InputLabel>
                    <TextField
                        name="venue"
                        variant="outlined"
                        value={inputs.value}
                        onChange={handleChange}
                        required="true"
                        multiline={true}
                    />
                    <InputLabel >Registration Link</InputLabel>
                    <TextField
                        name="registrationLink"
                        variant="outlined"
                        value={inputs.value}
                        onChange={handleChange}
                        required="true"
                        multiline="true"
                    />
                    <InputLabel >Meeting Link</InputLabel>
                    <TextField
                        name="meetingLink"
                        variant="outlined"
                        value={inputs.value}
                        onChange={handleChange}
                        required="true"
                        multiline="true"
                    />
                    <Box>
                        <Button

                            sx={{
                                marginTop: 2,
                                borderRadius: 2,
                                backgroundColor: "#0000ff",
                                width: "30px",

                            }}
                            variant="contained"

                            type="submit"
                        >Add</Button>
                        <Button

                            sx={{
                                marginTop: 2,
                                borderRadius: 2,
                                width: "30px",
                                marginLeft: 1
                            }}
                            variant="outlined"
                            color='error'
                            LinkComponent={Link}
                            to="/admin/home"

                        >Cancel</Button>
                    </Box>
                </Box>


            </form>
        </div >
    )
}

export default AddEvent