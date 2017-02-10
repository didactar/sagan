import React, { PropTypes } from 'react'


const Participate = ({event, showEvent}) =>
    <div className='event-participate'>
        <span 
            className='event-participate-count'
            onClick={ showEvent ?  e => showEvent(event.slug) : null}
        >
            120
        </span>
        <i className='event-participate-icon fa fa-user-plus'></i>
    </div>


const EventLocation = ({event}) =>
    <div className='event-location'>
        <i className='fa fa-map-marker event-location-icon'></i>
        <span className='event-location-label'>
            Museo de Ciencias Naturales
        </span>
    </div>


const EventTime = ({event}) =>
    <div className='event-time'>
        <i className='fa fa-clock-o event-time-icon'></i>
        <span className='event-time-label'>
            Miercoles - 15:00 a 18:00
        </span>
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


const Coordinates = ({event}) =>
    <div className='event-coordinates'>
        <EventTime event={event} />
        <EventLocation event={event} />
    </div>


const Event = ({event, showEvent}) =>
    <div className='event-content'>
        <div className='event-content-left'>
            <EventDate event={event} />
            <Coordinates event={event} />
        </div>
        <Participate 
            event={event}
            showEvent={showEvent} 
        />
    </div>


Event.propTypes = {
    event: PropTypes.object.isRequired,
    showEvent: PropTypes.func
}


export default Event
