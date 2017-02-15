import React, { PropTypes } from 'react'
import marked from 'marked'


const Guide = ({workshop}) =>
    <div 
        className='workshop-guide'
        dangerouslySetInnerHTML={{__html: marked(workshop.guide)}}
    >
    </div>


Guide.propTypes = {
    workshop: PropTypes.object.isRequired
}


export default Guide
