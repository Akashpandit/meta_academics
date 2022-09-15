import React, { useState, useEffect } from 'react'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const EventEdit = () => {

    const navigate = useNavigate();
    const id = useParams().id;

    const [event, setEvents] = useState();
    const [inputs, setInputs] = useState();
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const fetchEventDetail = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/event/event/${id}`)
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }
    useEffect(() => {
        fetchEventDetail().then((data) => {
            setEvents(data.event);
            let sdate1 = data.event.startDate.substring(0, 10);
            let edate1 = data.event.endDate.substring(0, 10);

            setInputs({
                name: data.event.name,
                startDate: sdate1,
                endDate: edate1,
                time: data.event.time,
                description: data.event.description,
                poster: data.event.poster,
                venue: data.event.venue,
                registrationLink: data.event.registrationLink,
                meetingLink: data.event.meetingLink
            })
        })
    }, [])
    const sendRequest = async () => {
        const res = await axios
            .put(`${process.env.REACT_APP_BASEURL}/api/event / edit / ${id}`)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
            .then(() => navigate("/admin/event"))

    }

    return (
        <div>
            {inputs && (
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
                            value={inputs.name}
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
                                    value={inputs.startDate}
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
                                    value={inputs.endDate}
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
                                    value={inputs.time}
                                    onChange={handleChange}
                                    required="true"
                                />
                            </div>
                            <div >
                                <InputLabel >Poster ID</InputLabel>

                                <TextField
                                    name="poster"
                                    variant="outlined"
                                    value={inputs.poster}
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
                            value={inputs.description}
                            onChange={handleChange}
                            required="true"
                            multiline="true"
                        />

                        <InputLabel >Venue</InputLabel>
                        <TextField
                            name="venue"
                            variant="outlined"
                            value={inputs.venue}
                            onChange={handleChange}
                            required="true"
                            multiline={true}
                        />
                        <InputLabel >Registration Link</InputLabel>
                        <TextField
                            name="registrationLink"
                            variant="outlined"
                            value={inputs.registrationLink}
                            onChange={handleChange}
                            required="true"
                            multiline="true"
                        />
                        <InputLabel >Meeting Link</InputLabel>
                        <TextField
                            name="meetingLink"
                            variant="outlined"
                            value={inputs.meetingLink}
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
                            >Update</Button>
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
            )}
        </div>
    )
}

export default EventEdit