import React, {Component} from 'react'
import './drawertogglebutton.css'

const drawerToggleButton = props => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
    </button>
)

export default drawerToggleButton