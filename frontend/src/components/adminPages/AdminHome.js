import React from 'react'
import {  Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/Index';
import { Link } from 'react-router-dom';

import './adminhome.css'
import Events from './Events'
import { Box, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/Index'
import { Link } from 'react-router-dom'
import Event from './Event'

const AdminHome = () => {

    const dispatch = useDispatch();
    return (
        <div className='admin_home_container'>
            <div className='admin_navbar'>
                <div className="admin_nav_logo" >
                    <b>
                        Meta Academics Cell
                    </b>
                </div>
                <Button size='small' onClick={() => dispatch(authActions.logout())} color="primary" variant="contained" sx={{ margin: 1, borderRadius: 2, }} LinkComponent={Link} to="/admin/login">Logout</Button>
            </div>
            <div className="admin_options_container">
                <div className="admin_option1">Edit Word of the day</div>
                <div className="admin_option2">Add Event</div>
                <Button variant='contained' color='primary' size='small' sx={{
                    fontSize: "10px",
                    margin: 1, borderRadius: 2, border: "1px solid"
                }} LinkComponent={Link} to='/admin/events/add'>Add Event</Button>

            </div>
            <div className="all_events_container">
                <Events />
            </div>
        </div>
    )
}

export default AdminHome