import React, { PropTypes } from 'react'
import { Users } from '../../../shared'


const Participations = ({participations}) =>
    <div className='workshop-event-participations'>
        <Users users={participations} />
    </div>


Participations.propTypes = {
    participations: PropTypes.array.isRequired
}


export default Participations
