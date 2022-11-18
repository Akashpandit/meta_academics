import React from 'react'
import './teamMember.css'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import thunderBadge from '../../assets/thunderbadge.png'


const TeamMemberComponent = ({ memberName, memberDesignation, memberImage }) => {
    return (
        <div className='team-member-container'>
            <div className="member-image-container">
                <div>
                    <img src={memberImage} alt="" />
                </div>
                <div className="meta_badge_container">
                    <img src={thunderBadge} alt="badge" />
                </div>
            </div>
            <div className="member-content-container">
                <div className="member-name">

                    {memberName}

                </div>
                <div className="member-designation">
                    {memberDesignation}
                </div>
            </div>
            <div className="member-socials-container">

                <FaInstagram size={20} color={"green"}></FaInstagram>
                <CgMail size={25} color={"green"}></CgMail>
                <FaLinkedinIn size={20} color={"green"}></FaLinkedinIn>

            </div>
            <div className='shape-bar'></div>
        </div>
    )
}

export default TeamMemberComponent