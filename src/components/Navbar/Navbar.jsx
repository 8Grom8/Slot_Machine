import React from 'react';

import Icon from '@material-ui/core/Icon';

import Avatar from '@material-ui/core/Avatar';

import {useSelector, shallowEqual} from "react-redux";

import './Navbar.scss'

const Navbar = () => {
    const balance = useSelector(state => state.userBalance, shallowEqual)
    return (
        <div className='navbar'>
            <div className='navbar-left-side'>
                <Icon style={{width:55, height:30}}>start</Icon>
                <h2 className='navbar-left-side-title'>Slot Machine</h2>
            </div>
            <div className="navbar-right-side">
                <span className='navbar-right-side-balance'>Balance:{balance}</span>
                <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
);
};

export default Navbar;
