import React from 'react'
import './wingStyles.css';
import {AiFillExclamationCircle, AiFillProfile} from 'react-icons/ai';
const Sword = () => {
  return (
    <div className='swordBody'>
        <div className='swordHeader'>
            <div className='swordHeaderContent'>
                <h1>SWORD</h1>
                <hr />
                <h5>The wing exclusively for orators. SWORD stands for Silicon Wing for Oratory Representation and Debating.</h5>
            </div>

            <div className='swordIcons'>
                <a href='#info'><AiFillProfile size={60} style={{ fill: 'white' }} /></a>
                <a href='#info'><AiFillExclamationCircle  size={60} style={{ fill: 'white' }}  /></a>
                <a href='#events'><AiFillProfile size={60} style={{ fill: 'white' }} /></a>
            </div>
            
        </div>
        <div className='swordMain'>
            <div id='info' className='swordInfo'>
                <h1>WHAT IS SWORD?</h1>
                <p>Lorem jfefnjen nakjdnefkjen nkdjfnkjwnfk nckjnfwk nkjfnub wejbfjwehewb fjebfjewhi djbbeifbwiubef nsdjvbjdwbi</p>
            </div>
            <hr />
            <div id='events' className='swordInfo'>
                <h1>EVENTS</h1>
                <div className='swordEvents'>
                    <div className='swordEvent'>
                        <h2>SWORD SESSION No. 50 </h2>
                        <ul className='swordList'>
                            <li>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</li>
                            <li>Time: 4.00PM</li>
                            <li>Date: 12/12/2020</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sword;