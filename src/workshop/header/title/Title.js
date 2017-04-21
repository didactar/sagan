import React from 'react'


const Title = ({workshop, showResources}) =>
    <div 
        className='workshop-header-content'
        onClick={showResources}
    >
        <div className='workshop-header-title'>
            {workshop.name}
        </div>
    </div>


export default Title
