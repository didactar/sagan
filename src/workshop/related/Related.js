import React, { PropTypes } from 'react'
import { Workshops } from '../../shared'


const RelatedWorkshops = ({items, fetching}) =>
    <div className='workshop-related'>
        <Workshops 
            workshops={items} 
            fetching={fetching} 
        />
    </div>


RelatedWorkshops.propTypes = {
    items: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}


export default RelatedWorkshops
