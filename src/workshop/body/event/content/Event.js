import React, { PropTypes } from 'react'


const EventDate = ({event}) =>
    <div className='workshop-event-date'>
        <div className='workshop-event-date'>
            20 Febrero 2018
        </div>
    </div>


const Event = ({event}) =>
    <div className='workshop-event-content'>
        <EventDate />
    </div>


Event.propTypes = {
    event: PropTypes.object.isRequired
}


export default Event
