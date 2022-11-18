import React from 'react';
import {AiFillExclamationCircle, AiFillProfile} from 'react-icons/ai';
import './wingStyles.css';
import eventPic1 from '../../home/public_Speaking3.jpeg';

const WriterWing = () => {
  return (
    <div className='swordBody'>
        <div className='swordHeader'>
            <div className='swordHeaderContent'>
                <h1>THE WRITER'S WING</h1>
                <hr />
                <h5>The wing exclusively for writers. Poetry, articles, reports, stories and what not.</h5>
            </div>

            <div className='swordIcons'>
                <a href='#info'><AiFillProfile size={60} style={{ fill: 'white' }} /></a>
                <a href='#info'><AiFillExclamationCircle  size={60} style={{ fill: 'white' }}  /></a>
                <a href='#events'><AiFillProfile size={60} style={{ fill: 'white' }} /></a>
            </div>
            
        </div>
        <div className='swordMain'>
            <div id='info' className='swordInfo'>
                <h1>WHAT IS WRITER'S WING?</h1>
                <p>Lorem jfefnjen nakjdnefkjen nkdjfnkjwnfk nckjnfwk nkjfnub wejbfjwehewb fjebfjewhi djbbeifbwiubef nsdjvbjdwbi</p>
            </div>
            <hr />
            <div id='events' className='swordInfo'>
                <h1>EVENTS</h1>
                <div className='swordEvents'>
                    <div className='swordEvent'>
                        <img className='writerWingEventImage' src={eventPic1} />
                        <h2>E-Mail Writing Workshop</h2>
                        <ul className='swordList'>
                            <li>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</li><br />
                            <li>Time: 4.00PM</li><br />
                            <li>Date: 12/12/2020</li>
                        </ul>
                    </div>
                </div>
                <div className='swordEvents'>
                    <div className='swordEvent'>
                        <img className='writerWingEventImage' src={eventPic1} />
                        <h2>E-Mail Writing Workshop</h2>
                        <ul className='swordList'>
                            <li>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</li><br />
                            <li>Time: 4.00PM</li><br />
                            <li>Date: 12/12/2020</li>
                        </ul>
                    </div>
                </div>
                <div className='swordEvents'>
                    <div className='swordEvent'>
                        <img className='writerWingEventImage' src={eventPic1} />
                        <h2>E-Mail Writing Workshop</h2>
                        <ol className='swordList'>
                            <li>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</li><br />
                            <li>Time: 4.00PM</li><br />
                            <li>Date: 12/12/2020</li><br />
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WriterWing