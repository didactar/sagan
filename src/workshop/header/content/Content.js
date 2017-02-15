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


export default HeaderContent
