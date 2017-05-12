import React, { PropTypes } from 'react'


const Title = ({workshop, showHome}) =>
    <div 
        className='workshop-header-title'
        onClick={showHome}
    >
        <div className='workshop-header-title-text'>
            {workshop.name}
        </div>
    </div>


const Header = props =>
    <div 
        className='workshop-header'
        style={{'backgroundImage': 'url(/images/workshops/' + props.workshop.image + '.jpg)'}}
    >
        <div className='workshop-header-degrade'>
            <Title {...props} />
        </div>
    </div>


Header.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Header
