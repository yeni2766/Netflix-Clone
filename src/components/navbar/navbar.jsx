import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import React, { Component, useState } from 'react';
import logo from './dp.jpg'; 
import './navbar.css';
class Navbar extends Component {
  
    styles={
        paddingLeft:40,
        paddingTop:5
    }
    render() { 
        return (
        <div className='navbar'>
            <div className = 'container'>
                <div className='left'>
                <img src= 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' style={this.styles}/>
                
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Series
                    </li>
                    <li>
                        Movies
                    </li>
                    <li>
                        New and Popular
                    </li>
                </ul>
                </div>
                <div className='right'>
                    <Search className='icon' />
                    <span>Children</span>
                    <Notifications/>
                    <img src = {logo}/>
                    <div className='profile'>
                    <ArrowDropDown className='search'/>
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                </div>

            </div>
        </div>);
    }
}
 
export default Navbar;
