import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css';

export default () => {
    return (
        <div className='sidebar'>
            <NavLink to='/' activeClassName='active' exact>WORK</NavLink>
            <NavLink to='/about' activeClassName='active' exact>ABOUT</NavLink>
        </div>
    )
}