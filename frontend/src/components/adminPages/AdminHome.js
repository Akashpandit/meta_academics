import React from 'react'
import {  Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/Index';
import { Link } from 'react-router-dom';


const AdminHome = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <Button size='small' onClick={() => dispatch(authActions.logout())} color="warning" variant="contained" sx={{ margin: 1, borderRadius: 2, backgroundColor: 'transparent' }} LinkComponent={Link} to="/admin/login">Logout</Button>

            AdminHome</div>
    )
}

export default AdminHome