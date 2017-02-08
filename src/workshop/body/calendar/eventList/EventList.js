import React, { PropTypes } from 'react'
import Spinner from '../../../../shared/loading/Spinner'


const EventItem = props =>
    <div 
        className='calendar-event' 
        onClick={e => props.showEventDetail({})}
    >
        <p>{props.eventItem.title}</p>
    </div>


const EventList = props =>
    <div className='main-column'>
        {props.events.map((eventItem, i) =>
            <EventItem 
                key={i} 
                eventItem={eventItem} 
                showEventDetail={props.showEventDetail} 
            />
        )}
    </div>


const EventListWrapper = props =>
    props.fetching
        ? <Spinner />
        : <EventList 
                events={props.events} 
                showEventDetail={props.showEventDetail} 
          />


EventListWrapper.propTypes = {
    events: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    showEventDetail: PropTypes.func.isRequired
}


export default EventListWrapper
