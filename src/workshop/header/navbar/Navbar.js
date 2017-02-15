import React, { PropTypes } from 'react'


const TabButton = ({activeTab, tab, icon, onClick, label}) =>
    <span 
        onClick={onClick}
        className={activeTab === tab 
            ? 'workshop-navbar-tab-active' 
            : 'workshop-navbar-tab' }
    >
        <i className={'fa ' + icon}></i>
    </span>


const Navbar = props =>
    <div className='workshop-navbar'>
        <div className='workshop-navbar-tabs'>
            <TabButton 
                tab='guide'
                activeTab={props.activeTab} 
                icon='fa-map-o' 
                onClick={props.showGuide} 
            />
            <TabButton 
                tab='calendar'
                activeTab={props.activeTab} 
                icon='fa-calendar-o' 
                onClick={props.showCalendar} 
            />
            <TabButton 
                tab='community'
                activeTab={props.activeTab} 
                icon='fa-group' 
                onClick={props.showCommunity} 
            />
            <TabButton 
                tab='related'
                activeTab={props.activeTab} 
                icon='fa-hashtag' 
                onClick={props.showRelated} 
            />
        </div>
    </div>


export default Navbar
