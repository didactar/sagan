import React, { PropTypes } from 'react'
import { Workshops } from '../../shared'


const HomeWorkshops = ({workshops, fetching}) =>
    <div className='home-workshops'>
        <Workshops 
            workshops={workshops} 
            fetching={fetching} 
        />
    </div>


HomeWorkshops.propTypes = {
    workshops: PropTypes.array.isRequired
}


export default HomeWorkshops
