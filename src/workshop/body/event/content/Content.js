import React from 'react'


const Participate = ({event}) =>
    <div className='event-participate'>
        <span className='event-participate-count'>
            120
        </span>
        <i className='event-participate-icon fa fa-user-plus'></i>
    </div>



const EventDate = ({event}) =>
    <div className='event-date'>
        <div className='event-date-day'>
            20
        </div>
        <div>
            <div className='event-date-month'>
                Julio 2017, Miercoles
            </div>
            <div className='event-date-time'>
                16:30 - 19:30 GMT-3 
            </div>
        </div>
    </div>



const EventContent = ({event}) =>
    <div className='event-content'>
        <div className='event-content-inner-wrapper'>
            <EventDate event={event} />
            <Participate event={event} />
        </div>
    </div>


export default EventContent
