import React from 'react'


const Tab = ({onClick, name, selectedTab}) =>
    <div 
        className={ name === selectedTab ? 'workshop-navbar-tab-selected' : 'workshop-navbar-tab' }
        onClick={onClick}
    >
        {name}
    </div>


const Navbar = props =>
    <div className='workshop-navbar'>
        <Tab 
            name='resources'
            onClick={props.showResources} 
            selectedTab={props.selectedTab}
        />
        <Tab 
            name='calendar'
            onClick={props.showCalendar} 
            selectedTab={props.selectedTab}
        />
        <Tab 
            name='community'
            onClick={props.showCommunity} 
            selectedTab={props.selectedTab}
        />
    </div>


export default Navbar
