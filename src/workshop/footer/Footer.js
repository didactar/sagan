import React, { PropTypes } from 'react'


const Button = ({content, icon, onClick}) =>
    <i 
        className={'workshop-footer-icon fa ' + icon}
        onClick={e => onClick()}
    >
    </i>


const Footer = ({workshop, content, showGuide, showCalendar}) =>
    <div className='workshop-footer'>
        <Button content={content} icon='fa-map-signs' onClick={showGuide} />
        <Button content={content} icon='fa-calendar-o' onClick={showCalendar} />
        <Button content={content} icon='fa-group' />
        <Button content={content} icon='fa-bell' />
        <Button content={content} icon='fa-heart-o' />
    </div>


Footer.propTypes = {
    workshop: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showGuide: PropTypes.func.isRequired
}


export default Footer
