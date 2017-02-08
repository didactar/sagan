import React, { PropTypes } from 'react'


const Guide = props =>
    <div>
        <h3>{props.workshop.description}</h3>
    </div>


Guide.propTypes = {
    workshop: PropTypes.object.isRequired
}


export default Guide
