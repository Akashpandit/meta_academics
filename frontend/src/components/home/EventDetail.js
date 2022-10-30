import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import AchieverComponent from './AchieverComponent';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import './eventDetail.css';

const EventDetail = () => {
    const id = localStorage.getItem("eventId");
    const [event, setEvent] = useState();
    const fetchEventDetail = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/event/event/${id}`)
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }
    useEffect(() => {
        fetchEventDetail().then((data) => {
            setEvent(data.event);

        })
    }, [])
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
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    return (
        <div className='event_detail_container'>
            {event && (
                <div>
                    <div className="header" >
                        <div >
                            <h1></h1>
                            <h1 style={{ color: 'white' }}>{event.name}</h1>
                            <div className="timing_container"
                                style={{ color: "white", padding: '1rem', display: "flex", flexDirection: "column", gap: "1rem" }}
                            >
                                <div>
                                    <FaRegCalendarAlt size={25} />
                                    {formatDate(event.startDate)}
                                </div>
                                <div style={{ display: "flex", gap: "2rem" }}>
                                    <div><AiOutlineClockCircle size={25} /> {tConvert(event.time)}</div>
                                    <div><MdOutlineLocationOn size={25} /> {event.venue}</div>
                                </div>
                                <Button sx={{ borderRadius: 2, ml: 1, maxWidth: 'fit-content' }} variant="contained" color='warning' onClick={() => window.open(event.registrationLink, "_blank")}  >Register</Button>
                            </div>
                        </div>
                    </div>
                    <div className="event-detail-content-container">
                        <div className="event-detail-description">
                            <h4>About</h4>
                            {event.description}
                        </div>
                        <div className='event-detail-img-container'>
                            <img src={event.poster} alt="" />
                        </div>
                    </div>

                    <div className="achiever-content-container">
                        <AchieverComponent
                            id={event.achievers} />

                    </div>

                </div>
            )}
        </div>
    )
}

export default EventDetail