import React, { PropTypes } from 'react'
import { Users } from '../../../../shared'


const Participations = ({participations}) =>
    <div className='workshop-event-participations'>
        <div className='workshop-event-participations-content'>
            <Users users={participations} />
        </div>
    </div>


Participations.propTypes = {
    participations: PropTypes.array.isRequired
}


export default Participations
