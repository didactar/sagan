import React, { PropTypes } from 'react'
import HeaderContent from './content'


const Header = props =>
    <div className='workshop-header'>
        <div 
            className='workshop-header-image'
            style={{'backgroundImage': 'url(/images/' + props.workshop.image + '.jpg)'}}
        >
            <div className='workshop-header-degrade'>
                <HeaderContent {...props} />
            </div>
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Header
