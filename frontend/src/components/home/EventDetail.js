import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const EventDetail = () => {

    const id = localStorage.getItem("eventId");
    let data;
    const [event, setEvent] = useState();
    const fetchEventDetail = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/event/event/${id}`)
            .catch((err) => console.log(err));

        data = await res.data;
        console.log("event data" + data);
        return data;
    }
    useEffect(() => {
        fetchEventDetail().then((data) => {
            setEvent(data.event);
            console.log(data.event)
        })
    }, [])
    console.log(event)
    // console.log("eventName" + event.name)

    return (
        <div className='event_detail_container'> <div class="header">
            <Navbar />
            <h1></h1>
            <h1 style={{ color: 'white' }}>s</h1>
            <p style={{ color: 'whitesmoke' }}>we organize following events  <br /> To know more about our events, scroll down.</p><br /><br />

        </div></div>
    )
}

export default EventDetail