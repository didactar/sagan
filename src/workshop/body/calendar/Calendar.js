import React, { PropTypes } from 'react'


const EventItem = ({eventItem, showEvent}) =>
    <div 
        className='calendar-event' 
        onClick={e => showEvent(eventItem.slug)}
    >
        <p>{eventItem.title}</p>
    </div>


const EventList = ({events, showEvent}) =>
    <div className='workshop-event-list'>
        {events.map((eventItem, i) =>
            <EventItem 
                key={i} 
                eventItem={eventItem} 
                showEvent={showEvent} 
            />
        )}
    </div>


EventList.propTypes = {
    events: PropTypes.array.isRequired,
    showEvent: PropTypes.func.isRequired
}


export default EventList
