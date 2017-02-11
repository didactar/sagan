import React, { PropTypes } from 'react'


const Bookmark = () =>
    <span 
        className='workshop-header-bookmark'
    >
        <i className='fa fa-heart-o'></i>
    </span>


const Title = ({workshop, showIndex}) =>
    <div 
        className='workshop-header-title'
        onClick={showIndex}
    >
        {workshop.name}
    </div>


const HeaderContent = props =>
    <div className='workshop-header-content'>
        <Title {...props} />
        <Bookmark {...props} />
    </div>


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
    showIndex: PropTypes.func.isRequired,
}


export default Header
