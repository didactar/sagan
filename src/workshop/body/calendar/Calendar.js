import React, { PropTypes } from 'react'
import EventList from './eventList'
import EventDetail from './eventDetail'


const Calendar = props =>
    props.calendarTab === 'eventList'
        ? <EventList 
            showEventDetail={props.showEventDetail} 
            workshop={props.workshop}
        />
        : <EventDetail 
            eventSlug={props.selectedEvent}
        />


Calendar.propTypes = {
    calendarTab: PropTypes.string.isRequired,
    showEventDetail: PropTypes.func.isRequired,
    workshop: PropTypes.object.isRequired,
    selectedEvent: PropTypes.string
}


export default Calendar
