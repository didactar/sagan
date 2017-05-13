import React from 'react'


const Tab = ({onClick, name, selectedTab}) =>
    <div 
        className={ name === selectedTab ? 'user-navbar-tab-selected' : 'user-navbar-tab' }
        onClick={onClick}
    >
        {name}
    </div>


const Navbar = props =>
    <div className='user-navbar'>
        <Tab 
            name='workshops'
            onClick={props.showWorkshops} 
            selectedTab={props.selectedTab}
        />
        <Tab 
            name='calendar'
            onClick={props.showCalendar} 
            selectedTab={props.selectedTab}
        />
        <Tab 
            name='about'
            onClick={props.showAbout} 
            selectedTab={props.selectedTab}
        />
    </div>


export default Navbar
