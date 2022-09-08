import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './eventComponent.css'
import { Link, useNavigate } from 'react-router-dom'
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
        datestr = d.toDateString()
        // let dayToday = d.getDay();
        // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // datestr += " ( " + weekday[dayToday] + " ) ";
        return datestr;
    }
    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    return (
        <div className='our_event_container' style={{ marginBottom: "1rem" }}>

            <div class="event_component_image">

                <img src={poster} alt="event poster" />
                <div className="image_header_footer">


                    <div className="content_title">
                        {name}
                    </div>
                    <div className="timing_container">

                        <div><FaRegCalendarAlt size={25} color="rgb(8, 59, 58)" /> {formatDate(startDate)} to {formatDate(endDate)}</div>
                        <div><AiOutlineClockCircle size={25} /> {tConvert(time)}</div>
                        <div><GrLocation size={25} /> {venue}</div>
                    </div>
                </div>

            </div>
            <div className="event_details_container">
                {description}

                <Button sx={{ borderRadius: 2, ml: 1, maxWidth: 'fit-content' }} variant="outlined" color='warning' onClick={() => window.open(registrationLink, "_blank")}  >Register</Button>
                <Link to={"/eventdetail"} style={{ textDecoration: "none" }}>

                    <Button sx={{ borderRadius: 2, ml: 1, maxWidth: 'fit-content' }} variant="outlined" color='warning' >Know More</Button>
                </Link>
            </div>
        </div>
    )
}
export default EventComponent