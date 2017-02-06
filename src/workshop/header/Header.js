import React, { PropTypes } from 'react'


const Button = ({content, icon, onClick}) =>
    <i 
        className={'workshop-navbar-icon fa ' + icon}
        onClick={e => onClick()}
    >
    </i>


const Navbar = ({workshop, content, showGuide, showCalendar, showCommunity}) =>
    <div className='workshop-navbar'>
        <div className='workshop-navbar-content'>
            <Button content={content} icon='fa-map-signs' onClick={showGuide} />
            <Button content={content} icon='fa-calendar-o' onClick={showCalendar} />
            <Button content={content} icon='fa-group' onClick={showCommunity} />
            <Button content={content} icon='fa-heart-o' />
        </div>
    </div>


const Title = ({workshop}) =>
    <div className='workshop-header-image-title'>
        {workshop.name}
    </div>


const Header = ({workshop, content, showGuide, showCalendar, showCommunity}) =>
    <div className='workshop-header'>
        <div className='workshop-header-degrade'>
            <Title workshop={workshop} />
            <Navbar 
                workshop={workshop}
                content={content}
                showGuide={showGuide}
                showCalendar={showCalendar} 
                showCommunity={showCommunity} 
            />
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
    showGuide: PropTypes.func.isRequired
}


export default Header
