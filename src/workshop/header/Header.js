import React, { PropTypes } from 'react'
import HeaderContent from './content'
import Navbar from './navbar'


const Header = props =>
    <div className='workshop-header'>
        <div 
            className='workshop-header-image'
            style={{'backgroundImage': 'url(/images/' + props.workshop.image + '.jpg)'}}
        >
            <div className='workshop-header-degrade'>
                <HeaderContent {...props} />
                {false ?  <Navbar {...props} /> : null}
            </div>
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showGuide: PropTypes.func.isRequired,
}


export default Header
