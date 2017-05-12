import React, { PropTypes } from 'react'
import { Users } from '../../../shared'


const Participate = ({users}) =>
    <div className='workshop-event-participate'>
        <div className='workshop-event-participate-button'>
            participate
        </div>
    </div>


const Participations = ({users}) =>
    <div className='workshop-event-participations'>
        <Users users={users} />
    </div>


const Event = props =>
    <div className='workshop-event'>
        <Participations {...props} />
        <Participate {...props} />
    </div>


Event.propTypes = {
    users: PropTypes.array.isRequired
}


export default Event
