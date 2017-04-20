import React from 'react'


const Tab = ({onClick, icon, name, text, subheaderContent, hideSubheader}) =>
    <div 
        className={ name === subheaderContent 
                        ? 'workshop-navbar-tab-selected'
                        : 'workshop-navbar-tab' }
        onClick={ name === subheaderContent 
                    ? hideSubheader
                    : onClick }
    >
        <i className={icon}></i>
        <div className='workshop-navbar-tab-name'>
            {name}
        </div>
    </div>


const Navbar = props =>
    <div className='workshop-navbar'>
        <Tab 
            name='calendar'
            text='calendar'
            onClick={props.showCalendar} 
            icon='workshop-navbar-tab-icon fa fa-calendar-o'
            subheaderContent={props.subheaderContent}
            hideSubheader={props.hideSubheader}
        />
        <Tab 
            name='resources'
            text='filter'
            onClick={props.showResourcesFilter} 
            icon='workshop-navbar-tab-icon fa fa-search'
            subheaderContent={props.subheaderContent}
            hideSubheader={props.hideSubheader}
        />
        <Tab 
            name='community'
            text='community'
            onClick={props.showCommunity} 
            icon='workshop-navbar-tab-icon fa fa-group'
            subheaderContent={props.subheaderContent}
            hideSubheader={props.hideSubheader}
        />
        <Tab 
            name='publish'
            text='publish'
            onClick={props.showPublish} 
            icon='workshop-navbar-tab-icon fa fa-pencil-square-o'
            subheaderContent={props.subheaderContent}
            hideSubheader={props.hideSubheader}
        />
        <Tab 
            name='subscribe'
            text='subscribe'
            onClick={props.showSubscribe} 
            icon='workshop-navbar-tab-icon fa fa-user-plus'
            subheaderContent={props.subheaderContent}
            hideSubheader={props.hideSubheader}
        />
    </div>


export default Navbar
