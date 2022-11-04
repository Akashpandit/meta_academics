import React, { useState } from 'react';
import EventComponent from './EventComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { LinearProgress } from '@mui/material';
const OurEvents = () => {

    const [events, setEvents] = useState();
    const [isLoading, setIsLoading] = useState("false");
    const sendRequest = async () => {
        setIsLoading("true")
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/event/getevents`)
            .catch((err) => console.log(err));

        setIsLoading("false")
        const data = await res.data;
        console.log(data)
        return data;
    }
    useEffect(() => {
        sendRequest().then((data) => setEvents(data.events))
    }, [])

    return (<>

        <div className='our_events_outer_container'
            style={{ display: "flex", flexDirection: "column" }}>
            <div className="header"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <h1></h1>
                <h1 style={{ color: 'white' }}>OUR EVENTS</h1>
                <p style={{ color: 'whitesmoke' }}>
                    we organize following events
                    <br />
                    To know more about our events, scroll down.
                </p>
            </div>
            {isLoading === "true" ? (
                <div>
                    <LinearProgress color='warning' />
                </div>
            ) : (
                <div className="events_container"
                    style={{ backgroundColor: "rgb(214, 255, 226)" }}>
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


                            />)).reverse()}
                </div>
            )}

        </div>
    </>
    )
}

export default OurEvents