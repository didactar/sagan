import React, { PropTypes } from 'react'


const Guide = ({description}) =>
    <div>
        <h3>{description}</h3>
    </div>


Guide.propTypes = {
    description: PropTypes.string.isRequired
}


export default Guide
