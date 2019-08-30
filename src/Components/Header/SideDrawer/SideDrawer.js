import React from 'react'
import {NavLink} from 'react-router-dom'
import './sideDrawer.css'

function SideDrawer(props){
    let drawerClasses = 'side-nav-bar'
    if(props.show){
        drawerClasses = 'side-nav-bar open'
    }
    return (
    <nav className={drawerClasses}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
    )
}

export default SideDrawer