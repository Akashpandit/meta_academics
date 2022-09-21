import React, { useState, useEffect } from 'react';
import { SliderData } from './sliderData.js';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css'
import axios from 'axios'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const ImgSilder = (props) => {

  //fetching events
  const [events, setEvents] = useState();
  const [eventCount, setEventCount] = useState(0);

  const sendRequest = async () => {
    const res = await axios
      .get(`${process.env.REACT_APP_BASEURL}/api/event/getevents`)
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => {
      setEvents(data.events)
      setEventCount(data.events.length)
    })
  }, [])

  const [current, setCurrent] = useState(0);
  const length = eventCount;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {events &&
        events.map((slide, index) => {
          return (<>
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div className='past_container' style={{ display: "flex", gap: "1rem" }}>
                  <div className="event_img_container">
                    <img src={slide.poster} alt={slide.name} key={index} height="500px"
                      style={{ borderRadius: "5px" }}

                    />
                  </div>
                  <div className="event_detail_container"
                    style={{ display: "flex", flexDirection: "column" }}>
                    <h1>
                      <b>

                        {slide.name}
                      </b>
                    </h1>
                    <div className="button_container"
                      style={{ display: "flex" }}>


                      <Button sx={{ borderRadius: 2, ml: 1, maxWidth: 'fit-content' }} variant="contained" color='warning' onClick={() => window.open(events.registrationLink, "_blank")}  >Register</Button>
                      <Link to={"/eventdetail"} style={{ textDecoration: "none" }}>

                        <Button sx={{ borderRadius: 2, ml: 1, maxWidth: 'max-content' }} variant="contained" color='warning' onClick={() => {
                          localStorage.setItem("eventName", slide.name)
                          localStorage.setItem("eventId", slide._id)
                        }} >Know More</Button>
                      </Link>
                    </div>
                  </div>
                </div>

              )}
            </div>
          </>

          )
        }

        )}

    </div>
  )
}

export default ImgSilder