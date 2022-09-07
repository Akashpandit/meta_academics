import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";
import axios from 'axios';
import Event from "./Event";

const Events = () => {

    const id = localStorage.getItem("userId");
    const [user, setUser] = useState();

    const sendRequest = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/event/user/${id}`)
            .catch((err) => console.log(err));

        const data = await res.data;
        console.log(data)
        return data;
    }

    useEffect(() => {
        sendRequest()
            .then((data) => setUser(data.user))
    }, []);

    return (
        <div style={{ marginBottom: "2rem" }}>
            {user &&
                user.events &&
                user.events.map((event, index) => (
                    <Event
                        key={index}
                        isUser={true}
                        id={event._id}
                        name={event.name}
                        startDate={event.startDate}
                        endDate={event.endDate}
                        time={event.time}
                        description={event.description}
                        poster={event.poster}
                        venue={event.venue}
                        registrationLink={event.registrationLink}
                        meetingLink={event.meetingLink}

                    />
                ))
            }
        </div>
    )
}

export default Events