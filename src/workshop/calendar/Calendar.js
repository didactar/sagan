import React, { PropTypes } from 'react'
import Loading from '../../shared/loading/Loading'


const Event = ({event, showEvent}) =>
    <div className='calendar-event' onClick={showEvent}>
        <p>{event.title}</p>
    </div>


const Calendar = ({events, showEvent}) =>
    <div className='main-column'>
        {events.map((event, i) =>
            <Event key={i} event={event} showEvent={showEvent} />
        )}
    </div>


const CalendarWrapper = ({events, fetching, showEvent}) =>
    <div>
        {fetching
            ? <Loading />
            : <Calendar events={events} showEvent={showEvent} />}
    </div>


CalendarWrapper.propTypes = {
    events: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    showEvent: PropTypes.func.isRequired
}


export default CalendarWrapper
