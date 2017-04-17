import React, { PropTypes } from 'react'
import Event from './event'


const Events = ({events, expandEvent, expandedEvent}) => 
    <div className='calendar-events'>
        {events.map((event, i) => 
            <Event
                key={i} 
                event={event} 
                expandEvent={expandEvent}
                expandedEvent={expandedEvent}
            />
       )}
    </div>


const Calendar = props => 
    <div className='calendar'>
        <Events {...props} />
    </div>


Calendar.propTypes = {
    events: PropTypes.array.isRequired,
    expandEvent: PropTypes.func.isRequired,
    expandedEvent: PropTypes.object.isRequired
}


export default Calendar
