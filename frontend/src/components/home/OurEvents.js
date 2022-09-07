import React, { useState } from 'react';
import EventComponent from './EventComponent';
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect } from 'react';
const OurEvents = () => {

    const [events, setEvents] = useState();

    const sendRequest = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/event/getevents`)
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }

    useEffect(() => {
        sendRequest().then((data) => setEvents(data.events))
    }, [])

    return (
        <div className='our_events_outer_container'>
            <div class="header">
                <Navbar />
                <h1></h1>
                <h1 style={{ color: 'white' }}>OUR EVENTS</h1>
                <p style={{ color: 'whitesmoke' }}>we organize following events  <br /> To know more about our events, scroll down.</p><br /><br />

            </div>
            <div className="events_container" style={{ backgroundColor: "rgb(8, 59, 58)" }}>

                {events &&
                    events.map((event, index) => (
                        <EventComponent
                            name={event.name}
                            // isUser={true}
                            id={event._id}
                            startDate={event.startDate}
                            endDate={event.endDate}
                            time={event.time}
                            description={event.description}
                            poster={event.poster}
                            venue={event.venue}
                            registrationLink={event.registrationLink}
                            meetingLink={event.meetingLink}


                        />))}
            </div>

        </div>
    )
}

export default OurEvents