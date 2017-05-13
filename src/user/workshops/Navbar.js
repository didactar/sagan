import React, { PropTypes } from 'react'


const Tab = ({name, number, onClick}) =>
    <div 
        className='navbar-tab'
        onClick={onClick}
    >
        <span className='navbar-tab-name'>
            {name}
        </span>
    </div>


const Navbar = props =>
    <div className='navbar'>
        <Tab 
            name='astronomy' 
            onClick={props.showCommunity} 
        />
        <Tab 
            name='history' 
            onClick={props.showCommunity} 
        />
        <Tab 
            name='science' 
            onClick={props.showCommunity} 
        />
        <Tab 
            name='programming' 
            onClick={props.showCommunity} 
        />
    </div>


Navbar.propTypes = {
    showCommunity: PropTypes.func.isRequired,
}

export default Navbar
