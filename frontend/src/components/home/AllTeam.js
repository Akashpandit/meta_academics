import React from 'react';
import pic1 from './public_Speaking3.jpeg';
// import pic2 from './mic.jpg';
import './AllTeam.css';
import TeamMemberComponent from './TeamMemberComponent';
import EventComponent from './EventComponent';

const AllTeam = () => {
    return (

        <div className='allteam-body'>

            <TeamMemberComponent />

        </div>

    )
}

export default AllTeam