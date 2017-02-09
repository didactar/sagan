import React, { PropTypes } from 'react'


const EventItem = ({eventItem, showEventDetail}) =>
    <div 
        className='calendar-event' 
        onClick={e => showEventDetail(eventItem.slug)}
    >
        <p>{eventItem.title}</p>
    </div>


const EventList = ({events, showEventDetail}) =>
    <div className='workshop-event-list'>
        {events.map((eventItem, i) =>
            <EventItem 
                key={i} 
                eventItem={eventItem} 
                showEventDetail={showEventDetail} 
            />
        )}
    </div>


EventList.propTypes = {
    events: PropTypes.array.isRequired,
    showEventDetail: PropTypes.func.isRequired
}


export default EventList
