import React, { PropTypes } from 'react'
import marked from 'marked'


const Guide = ({workshop}) =>
    <div className='workshop-guide'>
        <div 
            className='workshop-guide-content'
            dangerouslySetInnerHTML={{__html: marked(workshop.guide)}}
        >
        </div>
    </div>


Guide.propTypes = {
    workshop: PropTypes.object.isRequired
}


export default Guide
