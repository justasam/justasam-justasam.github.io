import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css';

export default () => {
    return (
        <div className='sidebar'>
            <NavLink data-hoverable="true" to='/' activeClassName='active' exact>WORK</NavLink>
            <NavLink data-hoverable="true" to='/about' activeClassName='active' exact>ABOUT</NavLink>
        </div>
    )
}