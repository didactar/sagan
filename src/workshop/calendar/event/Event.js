import React, { PropTypes } from 'react'
import Participations from './participations'


const Participate = ({event, expandEvent}) =>
    <div className='event-participate'>
        <span 
            className='event-participate-count'
            onClick={ expandEvent ?  e => expandEvent(event) : null}
        >
            120
        </span>
        <i className='event-participate-icon fa fa-user-plus'></i>
    </div>


const Coordinates = ({event}) =>
    <div className='event-coordinates'>
        <div className='event-time'>
            <i className='fa fa-clock-o event-time-icon'></i>
            <span className='event-time-label'>
                Miercoles - 15:00 a 18:00
            </span>
        </div>
        <div className='event-location'>
            <i className='fa fa-map-marker event-location-icon'></i>
            <span className='event-location-label'>
                Museo de Ciencias Naturales
            </span>
        </div>
    </div>


const EventDate = ({event}) =>
    <div className='event-date'>
        <div className='event-date-day'>
            20
        </div>
        <div className='event-date-month'>
            Febrero
        </div>
    </div>


const EventData = ({event, expandEvent}) =>
    <div 
        className='event-content-data'
        onClick={ expandEvent ?  e => expandEvent(event) : null}
    >
        <EventDate event={event} />
        <Coordinates event={event} />
    </div>


const EventContent = ({event, expandEvent}) =>
    <div className='event-content'>
        <EventData 
            event={event}
            expandEvent={expandEvent} 
        />
        <Participate 
            event={event}
            expandEvent={expandEvent} 
        />
    </div>


const Event = props =>
    <div className={ 
        props.event.slug === props.expandedEvent.slug 
        ? 'event-expanded event' : 'event'}
    >
        <EventContent {...props} />
        <Participations {...props} />
    </div>


Event.propTypes = {
    event: PropTypes.object.isRequired,
    expandEvent: PropTypes.func.isRequired,
    expandedEvent: PropTypes.object.isRequired,
}


export default Event
