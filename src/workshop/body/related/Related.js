import React, { PropTypes } from 'react'
import WorkshopList from '../../../shared/workshops/Workshops'


const RelatedWorkshops = ({items, fetching}) =>
    <div className='workshop-related'>
        <WorkshopList 
            workshops={items} 
            fetching={fetching} 
        />
    </div>


RelatedWorkshops.propTypes = {
    items: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}


export default RelatedWorkshops
