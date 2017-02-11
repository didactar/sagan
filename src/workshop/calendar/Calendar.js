import React, { PropTypes } from 'react'
import { Event } from '../../shared'


const Calendar = ({events, showEvent}) => 
    <div className='workshop-event-list'>
        {events.map((event, i) => 
            <Event
                key={i} 
                event={event} 
                showEvent={showEvent} 
            />
       )}
    </div>


Calendar.propTypes = {
    events: PropTypes.array.isRequired,
    showEvent: PropTypes.func.isRequired
}


export default Calendar