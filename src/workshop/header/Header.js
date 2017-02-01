import React, { PropTypes } from 'react'


const Header = ({workshop}) =>
    <div className='workshop-header'>
        <div className='workshop-header-image'>
            <div className='workshop-header-image-title'>
                {workshop.name}
            </div>
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired
}


export default Header
