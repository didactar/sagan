import React, { PropTypes } from 'react'
import Content from './content'
import Calendar from './calendar'


const HeaderDegrade = props =>
    <div className='workshop-header-degrade'>
        <Content {...props} />
        <Calendar {...props} />
    </div>


const Header = props =>
    <div className='workshop-header'>
        <div 
            className='workshop-header-image'
            style={{'backgroundImage': 'url(/images/' + props.workshop.image + '.jpg)'}}
        >
            <HeaderDegrade {...props } />
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Header
