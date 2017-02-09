import React, { PropTypes } from 'react'


const TabButton = ({activeTab, tab, icon, onClick, label}) =>
    <span 
        onClick={onClick}
        className={activeTab === tab 
            ? 'workshop-navbar-tab-active' 
            : 'workshop-navbar-tab' }
    >
        <i className={'fa ' + icon}></i>
        <span className='workshop-navbar-label'>
            {label}
        </span>
    </span>


const Navbar = props =>
    <div className='workshop-navbar'>
        <div className='workshop-navbar-tabs'>
            <TabButton 
                tab='guide'
                activeTab={props.activeTab} 
                icon='fa-map-o' 
                onClick={props.showGuide} 
                label='guide'
            />
            <TabButton 
                tab='calendar'
                activeTab={props.activeTab} 
                icon='fa-calendar-o' 
                onClick={props.showCalendar} 
                label='calendar'
            />
            <TabButton 
                tab='community'
                activeTab={props.activeTab} 
                icon='fa-group' 
                onClick={props.showCommunity} 
                label='community'
            />
            <TabButton 
                tab='related'
                activeTab={props.activeTab} 
                icon='fa-hashtag' 
                onClick={props.showRelated} 
                label='related'
            />
        </div>
    </div>


const Bookmark = () =>
    <div className='workshop-header-bookmark'>
        Bookmark
    </div>


const WorkshopName = ({name}) =>
    <div className='workshop-header-image-title'>
        {name}
    </div>


const HeaderContent = props =>
    <div className='workshop-header-content'>
        <WorkshopName name={props.workshop.name} />
        <Bookmark workshop={props.workshop} />
        <Navbar {...props} />
    </div>


const Header = props =>
    <div 
        className='workshop-header'
        style={{'backgroundImage': 'url(/images/' + props.workshop.image + '.jpg)'}}
    >
        <HeaderContent {...props} />
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
    showGuide: PropTypes.func.isRequired,
    showRelated: PropTypes.func.isRequired,
}


export default Header
