import React, { PropTypes } from 'react'



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
    </div>


export default HeaderContent
