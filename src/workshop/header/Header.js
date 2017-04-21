import React, { PropTypes } from 'react'
import Title from './title'
import Navbar from './navbar'


const Header = props =>
    <div 
        className='workshop-header'
        style={{'backgroundImage': 'url(/images/' + props.workshop.image + '.jpg)'}}
    >
        <div className='workshop-header-degrade'>
            <Title {...props} />
            <Navbar {...props} />
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Header
