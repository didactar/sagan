import React, { PropTypes } from 'react'



const Title = ({workshop}) =>
    <div className='workshop-header-title'>
        {workshop.name}
    </div>


const HeaderContent = props =>
    <div className='workshop-header-content'>
        <Title {...props} />
    </div>


HeaderContent.propTypes = {
    workshop: PropTypes.object.isRequired
}


export default HeaderContent
