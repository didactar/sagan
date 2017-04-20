import React, { PropTypes } from 'react'
import Navbar from './navbar'


const Title = ({workshop}) =>
    <div className='workshop-header-content'>
        <div className='workshop-header-title'>
            {workshop.name}
        </div>
    </div>


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
