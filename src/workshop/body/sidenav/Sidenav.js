import React, { PropTypes } from 'react'


const Tab = ({activeTab, tab, icon, onClick, label}) =>
    <div 
        onClick={onClick}
        className={activeTab === tab 
            ? 'workshop-sidenav-tab-active' 
            : 'workshop-sidenav-tab' }
    >
        <i className={'workshop-sidenav-tab-icon fa ' + icon}></i>
        <div className='workshop-sidenav-tab-label'>
            {label}
        </div>
    </div>


const Sidenav = props =>
    <div className='workshop-sidenav'>
        <Tab 
            tab='guide'
            label='guide'
            activeTab={props.activeTab} 
            icon='fa-map-o' 
            onClick={props.showGuide} 
        />
        <Tab 
            tab='calendar'
            label='calendar'
            activeTab={props.activeTab} 
            icon='fa-calendar-o' 
            onClick={props.showCalendar} 
        />
        <Tab 
            tab='community'
            label='community'
            activeTab={props.activeTab} 
            icon='fa-user' 
            onClick={props.showCommunity} 
        />
        <Tab 
            tab='locations'
            label='locations'
            activeTab={props.activeTab} 
            icon='fa-map-marker' 
            onClick={props.showRelated} 
        />
    </div>


export default Sidenav
