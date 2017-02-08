import React, { PropTypes } from 'react'


const TabButton = ({activeTab, tab, icon, onClick}) =>
    <i 
        onClick={onClick} 
        className={
            activeTab === tab 
                ? 'workshop-navbar-icon-active fa ' + icon
                : 'workshop-navbar-icon fa ' + icon 
        }
    ></i>


const Navbar = props =>
    <div className='workshop-navbar'>
        <div className='workshop-navbar-tab'>
            <TabButton 
                tab='guide'
                activeTab={props.activeTab} 
                icon='fa-map-signs' 
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
                tab='like'
                activeTab={props.activeTab} 
                icon='fa-heart-o' 
            />
        </div>
    </div>


const WorkshopName = ({name}) =>
    <div className='workshop-header-image-title'>
        {name}
    </div>


const Header = props =>
    <div 
        className='workshop-header'
        style={{'backgroundImage': 'url(/images/' + props.workshop.image + '.jpg)'}}
    >
        <div className='workshop-header-degrade'>
            <WorkshopName name={props.workshop.name} />
            <Navbar {...props} />
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
    showGuide: PropTypes.func.isRequired
}


export default Header
