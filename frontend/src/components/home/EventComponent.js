import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './eventComponent.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'

const EventComponent = ({ name, startDate, endDate, time, description, poster, venue, registrationLink, meetingLink, id }) => {
    const navigate = useNavigate();


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
        <div className='our_event_container' style={{ marginBottom: "1rem" }}>
            <div className='blog-card'>
                <div class="meta">
                    <div class="photo" ><img src={poster} alt="event poster" height={400} /></div>

                </div>
                <div class="description" >
                    <h1>{name}</h1>
                    <div className="timing_container">

                        <div><FaRegCalendarAlt size={25} />{formatDate(startDate)} to {formatDate(endDate)}</div>
                        <div><AiOutlineClockCircle size={25} /> {time}</div>
                        <div><GrLocation size={25} /> {venue}</div>
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
                    <Button sx={{ borderRadius: 2, ml: 1 }} variant="outlined" color='warning'  >Register</Button>

                </div>
            </div>


        </div>
    )
}
export default EventComponent