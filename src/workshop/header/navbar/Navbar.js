import React from 'react'


const Tab = ({onClick, name, text, bodyContent, hidebody}) =>
    <div 
        className={ name === bodyContent ? 'workshop-navbar-tab-selected' : 'workshop-navbar-tab' }
        onClick={ name === bodyContent ? hidebody : onClick }
    >
        <div className='workshop-navbar-tab-name'>
            {name}
        </div>
    </div>


const Navbar = props =>
    <div className='workshop-navbar'>
        <Tab 
            name='resources'
            text='filter'
            onClick={props.showResources} 
            bodyContent={props.bodyContent}
            hidebody={props.hidebody}
        />
        <Tab 
            name='calendar'
            text='calendar'
            onClick={props.showCalendar} 
            bodyContent={props.bodyContent}
            hidebody={props.hidebody}
        />
        <Tab 
            name='community'
            text='community'
            onClick={props.showCommunity} 
            bodyContent={props.bodyContent}
            hidebody={props.hidebody}
        />
    </div>


export default Navbar
