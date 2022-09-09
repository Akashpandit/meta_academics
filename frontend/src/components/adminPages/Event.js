import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './event.css';
import { Button } from '@mui/material'


const Event = ({ name, startDate, endDate, time, description, poster, venue, registrationLink, meetingLink, id }) => {
    const navigate = useNavigate();

    const handleAdd = () => {
        localStorage.setItem("eventId", id);
        localStorage.setItem("eventName", name);
        navigate(`/admin/events/addachiever/`);
    }
    const handleEdit = () => {
        navigate(`/admin/events/edit/${id}`);
    }
    const handleDelete = () => { }
    function formatDate(date) {
        let datestr = date + "";
        datestr = datestr.substring(0, 10);
        //getting the day
        const d = new Date(date);
        let dayToday = d.getDay();
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        datestr += " ( " + weekday[dayToday] + " ) ";
        return datestr;
    }
    return (
        <div className='event_container'>
            <div className="event_image_container">
                <img src={poster} alt="Event Poster" />
            </div>
            <div className="event_content_container">

                <div className="event_title">
                    <br />
                    Event Name:
                    <b>

                        {name}
                    </b>
                </div>
                <div className="event_time_and_date_container">
                    <div>Start Date: {formatDate(startDate)}</div>
                    <div>End Date: {formatDate(endDate)}</div>
                    <div>Time: {time}</div>
                </div>
                <div className="about_event">
                    <b>About Event: </b>
                    {description}
                </div>
                <div className="venue">
                    <b>Venue: </b>
                    {venue}
                </div>
                <div className="registration_link">
                    <b>Registration Link: </b>
                    {registrationLink}
                </div>
                <div className="meeting_link">
                    <b>Meeting Link: </b>
                    {meetingLink}
                </div>
                <Button sx={{ borderRadius: 2 }} variant="contained" onClick={handleAdd} >Add Achiever</Button>
                <Button sx={{ borderRadius: 2, ml: 1 }} variant="outlined" color='warning' onClick={handleEdit} >Edit</Button>
                <Button sx={{ borderRadius: 2, m: 1 }} variant="contained" color='error' onClick={handleDelete}>Delete </Button>

            </div>
        </div>
    )
}

export default Event