import React, { PropTypes } from 'react'


const Tab = ({name, number, onClick}) =>
    <div 
        className='navbar-tab'
        onClick={onClick}
    >
        <span className='navbar-tab-number'>
            {number}
        </span>
        <span className='navbar-tab-name'>
            {name}
        </span>
    </div>


const Navbar = props =>
    <div className='navbar'>
        <Tab 
            name='community' 
            number='202k' 
            onClick={props.showCommunity} 
        />
        <Tab 
            name='guides' 
            number='151k' 
            onClick={props.showCommunity} 
        />
        <Tab 
            name='assistants' 
            number='14' 
            onClick={props.showCommunity} 
        />
        <Tab 
            name='members' 
            number='121k' 
            onClick={props.showCommunity} 
        />
    </div>


Navbar.propTypes = {
    showCommunity: PropTypes.func.isRequired,
}

export default Navbar
